import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { formatSectionLabel, parseMarkdown } from './utils/markdown';

const RAW_SECTION_CONFIG = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    sources: ['content/home.md'],
    showTitle: false,
    sectionWrapper: 'none',
    entryWrapper: 'none',
    entryLayout: 'stack',
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: '💼',
    sources: [
      'content/experience/machine-learning-engineer.md',
      'content/experience/software-development-engineer-2.md',
      'content/experience/software-development-engineer-1.md',
    ],
    sectionWrapper: 'none',
    entryWrapper: 'card',
    entryLayout: 'stack',
    layoutClassName: '',
  },
  {
    id: 'education',
    label: 'Education',
    icon: '🎓',
    sources: [
      'content/education/masters.md',
      'content/education/bachelors.md',
    ],
    sectionWrapper: 'none',
    entryWrapper: 'card',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '💻',
    sources: [
      'content/projects/ner-bilstm-cnn.md',
      'content/projects/full-stack-deep-learning.md',
      'content/projects/trading-strategy-evaluation.md',
      'content/projects/slam-simulation.md',
      'content/projects/warehouse-search-planning.md',
      'content/projects/particle-filter-solar-system.md',
      'content/projects/hopscotch-kalman-filter.md',
      'content/projects/pid-controller.md',
      'content/projects/stock-market-forecasting.md',
      'content/projects/llm-fine-tuning.md',
    ],
    sectionWrapper: 'none',
    entryWrapper: 'card',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '🔧',
    sources: [
      'content/skills/languages.md',
      'content/skills/frameworks.md',
      'content/skills/developer-tools.md',
    ],
    sectionWrapper: 'none',
    entryWrapper: 'card',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '📧',
    sources: ['content/contact.md'],
    sectionWrapper: 'card',
    entryWrapper: 'none',
  },
];

const SECTION_CONFIG = RAW_SECTION_CONFIG.map((config) => ({
  showTitle: true,
  sectionWrapper: 'card',
  entryWrapper: 'none',
  entryLayout: 'stack',
  layoutClassName: '',
  ...config,
}));

const SECTION_CONFIG_MAP = SECTION_CONFIG.reduce((acc, config) => {
  acc[config.id] = config;
  return acc;
}, {});

const createInitialSectionState = () =>
  SECTION_CONFIG.reduce((acc, section) => {
    acc[section.id] = {
      status: 'loading',
      metadata: {},
      entries: [],
      error: null,
    };
    return acc;
  }, {});

const markdownComponents = {
  h1: ({ node, children, ...props }) => (
    <h1 className="text-3xl font-bold text-slate-900" {...props}>
      {children}
    </h1>
  ),
  h2: ({ node, children, ...props }) => (
    <h2 className="text-2xl font-semibold text-slate-900 mt-6" {...props}>
      {children}
    </h2>
  ),
  h3: ({ node, children, ...props }) => (
    <h3 className="text-xl font-semibold text-slate-900 mt-4" {...props}>
      {children}
    </h3>
  ),
  p: ({ node, children, ...props }) => (
    <p className="text-slate-600 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ node, children, ...props }) => (
    <ul className="list-disc ml-6 space-y-2 text-slate-600" {...props}>
      {children}
    </ul>
  ),
  ol: ({ node, children, ...props }) => (
    <ol className="list-decimal ml-6 space-y-2 text-slate-600" {...props}>
      {children}
    </ol>
  ),
  li: ({ node, children, ...props }) => (
    <li className="leading-relaxed text-slate-600" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ node, children, ...props }) => (
    <blockquote
      className="border-l-4 border-blue-200 bg-blue-50/60 text-slate-700 px-4 py-3 rounded-r-md"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ node, children, ...props }) => (
    <a
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ node, children, ...props }) => (
    <strong className="text-slate-800" {...props}>
      {children}
    </strong>
  ),
  hr: () => <hr className="my-8 border-slate-200" />,
  pre: ({ node, children, ...props }) => (
    <pre
      className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ node, inline, className, children, ...props }) => {
    const content = String(children).trim();
    if (inline) {
      return (
        <code
          className="bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-mono text-sm"
          {...props}
        >
          {content}
        </code>
      );
    }
    return (
      <code className={`font-mono text-sm ${className || ''}`} {...props}>
        {content}
      </code>
    );
  },
};

const CVWebsite = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sectionsState, setSectionsState] = useState(
    () => createInitialSectionState()
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateTo = (page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    SECTION_CONFIG.forEach((section) => {
      const sources = section.sources || [];
      if (!sources.length) {
        setSectionsState((prev) => ({
          ...prev,
          [section.id]: {
            status: 'ready',
            metadata: {},
            entries: [],
            error: null,
          },
        }));
        return;
      }

      Promise.all(
        sources.map((sourcePath) =>
          fetch(`${process.env.PUBLIC_URL}/${sourcePath}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to load ${sourcePath}`);
              }
              return response.text();
            })
            .then((text) => {
              const { metadata, body } = parseMarkdown(text);
              return { metadata, body, source: sourcePath };
            })
        )
      )
        .then((entries) => {
          if (!isMounted) {
            return;
          }

          setSectionsState((prev) => ({
            ...prev,
            [section.id]: {
              status: 'ready',
              metadata: entries[0]?.metadata || {},
              entries,
              error: null,
            },
          }));
        })
        .catch(() => {
          if (!isMounted) {
            return;
          }

          const label = section.label || formatSectionLabel(section.id);
          setSectionsState((prev) => ({
            ...prev,
            [section.id]: {
              ...prev[section.id],
              status: 'error',
              error: `Unable to load ${label} content.`,
            },
          }));
        });
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const wrapWithSectionWrapper = (content, variant) => {
    if (variant === 'card') {
      return (
        <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
          {content}
        </div>
      );
    }
    return content;
  };

  const getSectionTitle = (sectionId) => {
    const config = SECTION_CONFIG_MAP[sectionId];
    if (config?.label) {
      return config.label;
    }

    const titleFromMetadata = sectionsState[sectionId]?.metadata?.title;
    if (titleFromMetadata) {
      return titleFromMetadata;
    }

    return formatSectionLabel(sectionId);
  };

  const renderSectionContent = (sectionId) => {
    const section = sectionsState[sectionId];
    const config = SECTION_CONFIG_MAP[sectionId];

    if (!section || section.status === 'loading') {
      return wrapWithSectionWrapper(
        <p className="text-slate-500">Loading content...</p>,
        config.sectionWrapper
      );
    }

    if (section.status === 'error') {
      return wrapWithSectionWrapper(
        <p className="text-red-600 font-semibold">
          {section.error || 'Unable to load content.'}
        </p>,
        config.sectionWrapper
      );
    }

    if (!section.entries.length) {
      return wrapWithSectionWrapper(
        <p className="text-slate-500">Content coming soon.</p>,
        config.sectionWrapper
      );
    }

    const entryNodes = section.entries.map((entry, index) => {
      const key = entry.source || `${sectionId}-entry-${index}`;
      const markdownNode = (
        <div className="markdown-content space-y-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
          >
            {entry.body}
          </ReactMarkdown>
        </div>
      );

      if (config.entryWrapper === 'card') {
        return (
          <div
            key={key}
            className="bg-white rounded-lg p-6 shadow-sm space-y-4"
          >
            {markdownNode}
          </div>
        );
      }

      return (
        <div key={key} className="space-y-4">
          {markdownNode}
        </div>
      );
    });

    const arrangedContent =
      config.entryLayout === 'grid' ? (
        <div
          className={`grid gap-6 ${
            config.layoutClassName || 'grid-cols-1 sm:grid-cols-2'
          }`}
        >
          {entryNodes}
        </div>
      ) : (
        <div className="flex flex-col gap-6">{entryNodes}</div>
      );

    return wrapWithSectionWrapper(arrangedContent, config.sectionWrapper);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex relative">
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white lg:hidden"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside
          className={`
            min-h-screen w-64 bg-slate-900 text-white shrink-0
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0 pt-20'  : '-translate-x-64 lg:translate-x-0'}
            fixed lg:static
          `}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Kushal Atul Ramaiya</h1>
            <p className="text-slate-400 mb-8">Software Development Engineer</p>

            <nav className="space-y-4">
              {SECTION_CONFIG.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`
                    flex items-center space-x-3 p-2 rounded-lg
                    hover:bg-blue-600 transition-colors w-full text-left
                  `}
                >
                  <span>{item.icon}</span>
                  <span>{getSectionTitle(item.id)}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className={`
          flex-1 p-6 lg:p-8 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'ml-64  pt-20 lg:pt-0' : 'ml-0 pt-20'}
        `}>
          <div className="max-w-3xl mx-auto space-y-16">
            {SECTION_CONFIG.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="space-y-6"
              >
                {section.showTitle !== false && (
                  <h1 className="text-3xl font-bold">
                    {getSectionTitle(section.id)}
                  </h1>
                )}
                {renderSectionContent(section.id)}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CVWebsite;
