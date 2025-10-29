import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownCollection } from "../hooks/useMarkdown";

const servicesContext = require.context(
  "../content/services",
  false,
  /\.md$/
);

const markdownComponents = {
  p: ({ children, ...props }) => (
    <p className="mt-3 text-slate-600 dark:text-slate-300" {...props}>
      {children}
    </p>
  ),
};

export const Services = () => {
  const options = useMemo(
    () => ({ sortBy: "order", direction: "asc" }),
    []
  );
  const { items: services, loading, error } = useMarkdownCollection(
    servicesContext,
    options
  );

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Services
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          I enjoy helping teams navigate the fuzzy middle between idea and
          production. Here are a few ways we can collaborate.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-slate-500">
          Loading service offerings…
        </p>
      )}
      {error && (
        <p className="text-sm text-red-500">
          Unable to load services. Please review the markdown files.
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {services.map(({ slug, data, content }) => (
          <div
            key={slug}
            className="rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-400"
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
          </div>
        ))}
      </div>
    </div>
  );
};
