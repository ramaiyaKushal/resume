export const parseMarkdown = (text) => {
  if (!text) {
    return { metadata: {}, body: '' };
  }

  const lines = text.split(/\r?\n/);
  let metadata = {};
  let bodyStartIndex = 0;

  if (lines[0]?.trim() === '---') {
    const meta = {};
    let i = 1;

    for (; i < lines.length; i += 1) {
      const line = lines[i];
      if (line.trim() === '---') {
        i += 1;
        bodyStartIndex = i;
        break;
      }

      if (!line.trim()) {
        continue;
      }

      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) {
        continue;
      }

      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      if (key) {
        meta[key] = value;
      }
    }

    metadata = meta;
    if (bodyStartIndex === 0) {
      bodyStartIndex = lines.length;
    }
  }

  const body = lines.slice(bodyStartIndex).join('\n').trim();
  return { metadata, body };
};

export const formatSectionLabel = (id) =>
  id
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

const normalizePath = (path) => path.replace(/^\/+/, '');

const stripTrailingSlash = (value) => value.replace(/\/+$/, '');

const ensureLeadingSlash = (value) =>
  value.startsWith('/') ? value : `/${value}`;

export const buildAssetCandidates = (relativePath) => {
  const path = normalizePath(relativePath);
  const publicUrl = process.env.PUBLIC_URL || '';
  const candidates = [];

  // Priority 1: Relative path with PUBLIC_URL (works with custom domains)
  if (publicUrl && !/^https?:\/\//i.test(publicUrl)) {
    const trimmedPublicUrl = stripTrailingSlash(publicUrl);
    const prefix = ensureLeadingSlash(trimmedPublicUrl);
    candidates.push(`${prefix}/${path}`);
  }

  // Priority 2: Relative to current location (works everywhere)
  if (typeof window !== 'undefined') {
    try {
      const url = new URL(path, window.location.href);
      // Make it relative if it's same origin
      if (url.origin === window.location.origin) {
        candidates.push(url.pathname);
      } else {
        candidates.push(url.toString());
      }
    } catch (error) {
      // ignore malformed URL attempts
    }

    // Try with first path segment (for /resume/ style paths)
    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
    if (firstSegment) {
      candidates.push(`/${firstSegment}/${path}`);
    }
  }

  // Priority 3: Simple relative paths
  candidates.push(`/${path}`);
  candidates.push(path);

  // Priority 4: Full URLs with origin (last resort)
  if (publicUrl && /^https?:\/\//i.test(publicUrl)) {
    const trimmedPublicUrl = stripTrailingSlash(publicUrl);
    candidates.push(`${trimmedPublicUrl}/${path}`);
  }

  if (typeof window !== 'undefined') {
    candidates.push(`${window.location.origin}/${path}`);
  }

  // Remove duplicates and clean up double slashes
  const uniqueCandidates = [...new Set(candidates)].map((candidate) =>
    candidate.replace(/([^:]\/)\/+/g, '$1')
  );

  return uniqueCandidates;
};

// Cache for the content.json file
let contentCache = null;

const loadContentJson = async () => {
  if (contentCache !== null) {
    return contentCache;
  }

  // Build path relative to PUBLIC_URL
  const publicUrl = process.env.PUBLIC_URL || '';
  const basePath = publicUrl ? `${publicUrl}/content.json` : '/content.json';
  
  // eslint-disable-next-line no-console
  console.log('Attempting to load content.json from:', basePath);

  try {
    const response = await fetch(basePath);
    // eslint-disable-next-line no-console
    console.log(`Response for ${basePath}:`, response.status, response.ok);
    
    if (!response.ok) {
      throw new Error(
        `Request for ${basePath} failed with status ${response.status}`
      );
    }

    contentCache = await response.json();
    // eslint-disable-next-line no-console
    console.log('Successfully loaded content.json with', Object.keys(contentCache).length, 'files');
    return contentCache;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error loading content.json:`, error);
    throw error;
  }
};

export const fetchMarkdownAsset = async (relativePath) => {
  try {
    // Try to load from content.json first
    const contentJson = await loadContentJson();
    let normalizedPath = normalizePath(relativePath);
    
    // Remove 'content/' prefix if present, since content.json keys don't include it
    normalizedPath = normalizedPath.replace(/^content\//, '');
    
    // eslint-disable-next-line no-console
    console.log(`Looking for "${normalizedPath}" in content.json (original: "${relativePath}")`);
    
    if (contentJson[normalizedPath]) {
      // eslint-disable-next-line no-console
      console.log(`Found "${normalizedPath}" in content.json`);
      return { text: contentJson[normalizedPath], url: normalizedPath };
    }
    
    // eslint-disable-next-line no-console
    console.warn(`Key "${normalizedPath}" not found in content.json. Available keys:`, Object.keys(contentJson).slice(0, 5));

    // Fallback to direct fetch if not in JSON (for development)
    const candidates = buildAssetCandidates(relativePath);
    let lastError = null;

    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate);
        if (!response.ok) {
          lastError = new Error(
            `Request for ${candidate} failed with status ${response.status}`
          );
          continue;
        }

        const text = await response.text();
        return { text, url: candidate };
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error(`Unable to load asset ${relativePath}`);
  } catch (error) {
    throw error;
  }
};
