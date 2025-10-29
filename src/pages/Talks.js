import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownCollection } from "../hooks/useMarkdown";

const talksContext = require.context("../content/talks", false, /\.md$/);

const markdownComponents = {
  p: ({ children, ...props }) => (
    <p
      className="mt-3 text-sm text-slate-600 dark:text-slate-300"
      {...props}
    >
      {children}
    </p>
  ),
};

export const Talks = () => {
  const options = useMemo(
    () => ({ sortBy: "order", direction: "asc" }),
    []
  );
  const { items: talks, loading, error } = useMarkdownCollection(
    talksContext,
    options
  );

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Talks
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Sharing stories and lessons is my favourite way to learn in public.
          These are a couple of recent talks—reach out if you&apos;d like
          slides or a private session for your team.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-slate-500">Loading talks…</p>
      )}
      {error && (
        <p className="text-sm text-red-500">
          Unable to load talks. Please review the markdown files.
        </p>
      )}

      <div className="space-y-6">
        {talks.map(({ slug, data, content }) => (
          <article
            key={slug}
            className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-400"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {data.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {data.event} · {data.year}
              </span>
            </div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {content}
            </ReactMarkdown>
            {data.link && (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-blue-700 transition hover:text-blue-500 dark:text-blue-200 dark:hover:text-blue-100"
              >
                View resources →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
