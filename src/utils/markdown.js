import matter from "gray-matter";

const fetchMarkdown = async (resource) => {
  const response = await fetch(resource);
  if (!response.ok) {
    throw new Error(`Failed to load markdown from ${resource}`);
  }
  const raw = await response.text();
  return matter(raw);
};

const normalizeSlug = (key) =>
  key.replace(/^\.\//, "").replace(/\.md$/, "");

export const loadMarkdownFile = async (resource) => {
  const { data, content } = await fetchMarkdown(resource);
  return { data, content };
};

export const loadMarkdownCollection = async (context, options = {}) => {
  const { sortBy = "order", direction = "asc" } = options;
  const files = context.keys();

  const entries = await Promise.all(
    files.map(async (key) => {
      const resource = context(key);
      const { data, content } = await fetchMarkdown(resource);
      return {
        slug: normalizeSlug(key),
        data,
        content,
      };
    })
  );

  const sorted = entries.sort((a, b) => {
    const aVal = a.data?.[sortBy];
    const bVal = b.data?.[sortBy];
    if (aVal === undefined && bVal === undefined) return 0;
    if (aVal === undefined) return 1;
    if (bVal === undefined) return -1;
    if (typeof aVal === "number" && typeof bVal === "number") {
      return direction === "asc" ? aVal - bVal : bVal - aVal;
    }
    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();
    if (aStr < bStr) return direction === "asc" ? -1 : 1;
    if (aStr > bStr) return direction === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
};
