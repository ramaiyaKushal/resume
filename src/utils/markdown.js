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
  const candidates = new Set();

  if (publicUrl) {
    const trimmedPublicUrl = stripTrailingSlash(publicUrl);
    candidates.add(`${trimmedPublicUrl}/${path}`);

    if (typeof window !== 'undefined' && !/^https?:\/\//i.test(trimmedPublicUrl)) {
      const prefix = ensureLeadingSlash(trimmedPublicUrl);
      candidates.add(`${window.location.origin}${prefix}/${path}`);
    }
  }

  if (typeof window !== 'undefined') {
    try {
      candidates.add(new URL(path, window.location.href).toString());
    } catch (error) {
      // ignore malformed URL attempts
    }

    candidates.add(`${window.location.origin}/${path}`);

    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
    if (firstSegment) {
      candidates.add(`${window.location.origin}/${firstSegment}/${path}`);
    }
  }

  candidates.add(`/${path}`);
  candidates.add(path);

  const uniqueCandidates = Array.from(candidates).map((candidate) =>
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

  const candidates = buildAssetCandidates('content.json');
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

      contentCache = await response.json();
      return contentCache;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Unable to load content.json');
};

export const fetchMarkdownAsset = async (relativePath) => {
  try {
    // Try to load from content.json first
    const contentJson = await loadContentJson();
    const normalizedPath = normalizePath(relativePath);
    
    if (contentJson[normalizedPath]) {
      return { text: contentJson[normalizedPath], url: normalizedPath };
    }

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
