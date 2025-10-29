import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowUpRight } from "lucide-react";
import homeContent from "../content/home.md";
import { useLayoutContext } from "../components/Layout";
import { useMarkdownFile } from "../hooks/useMarkdown";

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
    <p className="text-lg text-slate-600" {...props}>
      {children}
    </p>
  ),
};

export const Home = () => {
  const context = useLayoutContext();
  const isDark = context?.isDark ?? false;
  const { data, content, loading, error } = useMarkdownFile(homeContent);
  const highlightCards = data?.highlights ?? [];
  const featuredPosts = data?.featuredPosts ?? [];

  const intro = useMemo(() => {
    if (!content) return null;
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    );
  }, [content]);

  return (
    <div className="space-y-16">
      <section className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">
            {data?.tagline ?? "Hello"}
          </p>
          <h2 className="text-4xl font-semibold leading-snug text-slate-900 dark:text-slate-100 md:text-5xl">
            {data?.title ??
              "👋 Hi, I’m Kushal — I turn ideas into resilient software and ML platforms."}
          </h2>
          {loading && (
            <p className="text-sm text-slate-500">Loading introduction…</p>
          )}
          {error && (
            <p className="text-sm text-red-500">
              Unable to load home content. Please verify the markdown file.
            </p>
          )}
          {!loading && !error && intro}
        </div>
        <div className="space-y-4">
          {highlightCards.map((card) => (
            <div
              key={card.heading}
              className={`rounded-3xl border p-6 shadow-sm transition ${
                isDark
                  ? "border-slate-800 bg-slate-900/70"
                  : "border-blue-200 bg-blue-50"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500 dark:text-blue-300">
                {card.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {card.heading}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">
            Featured Posts
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            A few pieces I enjoyed writing
          </h3>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70">
          <ul className="divide-y divide-slate-200 dark:divide-slate-800">
            {featuredPosts.map((post) => (
              <li key={post.title}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-6 px-6 py-4 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-blue-200"
                >
                  <span className="text-base font-medium">{post.title}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
