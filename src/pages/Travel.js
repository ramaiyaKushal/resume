import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownCollection } from "../hooks/useMarkdown";

const travelContext = require.context("../content/travel", false, /\.md$/);

const markdownComponents = {
  p: ({ children, ...props }) => (
    <p className="mt-2 text-slate-600 dark:text-slate-300" {...props}>
      {children}
    </p>
  ),
};

export const Travel = () => {
  const options = useMemo(
    () => ({ sortBy: "order", direction: "asc" }),
    []
  );
  const { items: trips, loading, error } = useMarkdownCollection(
    travelContext,
    options
  );

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Travel Log
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          I collect memories through road trips, food, and long walks. Here are
          a few recent highlights I can&apos;t stop talking about.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-slate-500">Loading travel notes…</p>
      )}
      {error && (
        <p className="text-sm text-red-500">
          Unable to load travel entries. Please review the markdown files.
        </p>
      )}

      <ul className="space-y-4">
        {trips.map(({ slug, data, content }) => (
          <li
            key={slug}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-sm dark:border-slate-800 dark:bg-slate-900/70"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {data.title}
            </h3>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {content}
            </ReactMarkdown>
          </li>
        ))}
      </ul>
    </div>
  );
};
