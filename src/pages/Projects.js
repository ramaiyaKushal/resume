import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowUpRight } from "lucide-react";
import { useLayoutContext } from "../components/Layout";
import { useMarkdownCollection } from "../hooks/useMarkdown";

const projectsContext = require.context(
  "../content/projects",
  false,
  /\.md$/
);

const badgeClasses =
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium uppercase tracking-wide";

const markdownComponents = {
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-blue-600 underline-offset-2 hover:text-blue-500"
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ children, ...props }) => (
    <p className="text-sm text-slate-600" {...props}>
      {children}
    </p>
  ),
};

export const Projects = () => {
  const context = useLayoutContext();
  const isDark = context?.isDark ?? false;
  const options = useMemo(
    () => ({ sortBy: "order", direction: "asc" }),
    []
  );
  const { items: projects, loading, error } = useMarkdownCollection(
    projectsContext,
    options
  );

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Featured Projects
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          A handful of builds that show how I approach ML platforms—from
          research tooling and trading experiments to robotics simulations and
          enablement resources.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-slate-500">Loading project highlights…</p>
      )}
      {error && (
        <p className="text-sm text-red-500">
          Unable to load projects. Please check the markdown files.
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ slug, data, content }) => {
          const {
            title,
            tags = [],
            highlight,
            lastPush,
            links = [],
          } = data;
          return (
            <article
              key={slug}
              className={`flex h-full flex-col justify-between rounded-3xl border p-6 shadow-sm transition ${
                isDark
                  ? "border-slate-800 bg-slate-900/70"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold capitalize text-slate-900 dark:text-slate-100">
                    {title}
                  </h3>
                  <span
                    className={`${badgeClasses} border-blue-400/60 bg-blue-50 text-blue-700 dark:border-blue-400/40 dark:bg-blue-500/10 dark:text-blue-200`}
                  >
                    Featured
                  </span>
                </div>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {content}
                </ReactMarkdown>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {highlight && <span>{highlight}</span>}
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {lastPush && <span>Last update: {lastPush}</span>}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {links.length > 0 ? (
                  links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 dark:border-blue-400/60 dark:text-blue-200 dark:hover:bg-blue-500/10"
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))
                ) : (
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500 dark:border-slate-700 dark:text-slate-300">
                    Internal project
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
