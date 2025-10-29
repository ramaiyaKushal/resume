import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownCollection } from "../hooks/useMarkdown";

const tilContext = require.context("../content/til", false, /\.md$/);

const markdownComponents = {
  p: ({ children, ...props }) => (
    <p className="mt-2 text-slate-600 dark:text-slate-300" {...props}>
      {children}
    </p>
  ),
  code: ({ children, ...props }) => (
    <code
      className="rounded bg-slate-100 px-1 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
      {...props}
    >
      {children}
    </code>
  ),
};

export const Til = () => {
  const options = useMemo(
    () => ({ sortBy: "order", direction: "asc" }),
    []
  );
  const { items: entries, loading, error } = useMarkdownCollection(
    tilContext,
    options
  );

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Today I Learned
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Bite-sized notes from the field—small reminders that solved real
          problems. Treat them as conversation starters rather than absolute
          truths.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-slate-500">Loading notes…</p>
      )}
      {error && (
        <p className="text-sm text-red-500">
          Unable to load notes. Please review the markdown files.
        </p>
      )}

      <ul className="space-y-4">
        {entries.map(({ slug, data, content }) => (
          <li
            key={slug}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-sm dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {data.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {data.date}
              </span>
            </div>
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
