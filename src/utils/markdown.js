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
