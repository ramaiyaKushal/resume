import React, { useState } from 'react';
import { Menu, X, ArrowRight, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const assetBase = process.env.PUBLIC_URL || '';

const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' }
];

const stats = [
  { label: 'Experience', value: '2+ yrs' },
  { label: 'Primary Focus', value: 'AI & SWE' },
  { label: 'Latest Role', value: 'MSCS Student @ Georgia Tech' },
  { label: 'Location', value: 'Atlanta, GA, USA' }
];

const experience = [
  {
    company: 'Augmont Enterprise',
    title: 'Machine Learning Engineer',
    period: 'Apr 2024 – Aug 2025',
    location: 'Remote',
    summary:
      'Scaled LLM-powered platforms that help internal teams ship AI features with production-grade observability.',
    achievements: [
      'Built end-to-end RAG pipelines with LangChain, ChromaDB, and FAISS; orchestrated on AWS with MLflow for experiment tracking and Langfuse for evaluation.',
      'Delivered a multi-LLM conversational agent (GPT-4o, Claude 3, Gemini, Mistral, LLaMA 3) via OpenRouter, exposing unified OpenAI-compatible APIs for engineering teams.',
      'Defined monitoring guardrails and rollout strategies that reduced fine-tuning iteration time by 40% while maintaining compliance requirements.'
    ],
    tools: ['Python', 'LangChain', 'MLflow', 'Langfuse', 'AWS', 'OpenRouter']
  },
  {
    company: 'FactSet',
    title: 'Software Development Engineer 2',
    period: 'Mar 2020 – Feb 2021',
    location: 'London, UK',
    summary:
      'Owned the Euronext market data feed, FactSet’s largest European exchange integration and kept latency within SLA during aggressive growth.',
    achievements: [
      'Diagnosed production incidents in a globally distributed feed network, restoring service without SLA breaches.',
      'Improved deployment automation, monitoring, and configuration tooling to boost resiliency and throughput.',
      'Coordinated with exchanges, vendors, and internal stakeholders to integrate new market data sources end-to-end.'
    ],
    tools: ['C++', 'Bash', 'Linux', 'Market Data', 'Automation']
  },
  {
    company: 'FactSet',
    title: 'Software Development Engineer 1',
    period: 'Aug 2019 – Mar 2020',
    location: 'London, UK',
    summary:
      'Contributed to low-latency services powering intraday messaging for institutional finance clients.',
    achievements: [
      'Implemented performant C++ components used across the Euronext data platform.',
      'Shipped remote deployment tooling on RHEL 7 hosts that improved operational efficiency for the team.',
      'Partnered with senior engineers to harden production workflows and observability.'
    ],
    tools: ['C++', 'Python', 'Bash', 'RHEL', 'Distributed Systems']
  }
];

const projects = [
  {
    title: 'Named Entity Recognition Platform',
    description:
      'End-to-end NER service combining character CNNs, BiLSTM layers, and CRF decoding. Trains on CoNLL-2003 and ships as a hardened API.',
    outcomes: [
      'Reproduced research-grade baselines with dev/test F1 ≈ 0.90/0.85.',
      'Packaged inference with Modal and exposed a curl-friendly API for rapid experimentation.',
      'Automated data preparation, batching, and evaluation pipelines in Jupyter/PyTorch.'
    ],
    tech: ['Python', 'PyTorch', 'NLP', 'Modal', 'GloVe'],
    command: `curl -s -X POST \\
  "https://ramaiyakushal-ner-app--ner-model-api-predict-web.modal.run" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Welcome to America"}' \\
  | python3 -m json.tool`
  },
  {
    title: 'ML vs. Manual Trading Strategies',
    description:
      'Compared classical indicators with ML-driven trading strategies by evaluating 16 combinations of data, features, and execution logic.',
    outcomes: [
      'Back-tested equities on Quantopian and Alpha Vantage data to benchmark each strategy.',
      'Built an interactive dashboard to visualise drawdowns, Sharpe ratios, and cumulative returns.',
      'Documented repeatable evaluation methodology for non-technical stakeholders.'
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Backtesting', 'Data Visualisation'],
    link: { href: `${assetBase}/Project8.pdf`, label: 'Read the project summary' }
  },
  {
    title: 'SLAM Simulation Toolkit',
    description:
      'Implemented particle-filter-based SLAM in Python to localise robots and map unknown indoor environments.',
    outcomes: [
      'Fused lidar observations with motion models to maintain accurate localisation over long runs.',
      'Created visual debugging tools that highlight particle convergence and mapping confidence.',
      'Enhanced planning heuristics to reduce mapping time by ~18% in simulation.'
    ],
    tech: ['Python', 'Robotics', 'Particle Filter', 'Simulation']
  },
  {
    title: 'Full Stack Deep Learning Capstone',
    description:
      'A cohort-based project focused on taking deep learning prototypes to production with rigorous MLOps practices.',
    outcomes: [
      'Authored reproducible training pipelines, experiment sheets, and deployment playbooks.',
      'Presented learnings on model evaluation, data curation, and responsible rollout strategies.',
      'Delivered workshop materials now used internally for onboarding data scientists.'
    ],
    tech: ['Deep Learning', 'MLOps', 'Experiment Tracking', 'Documentation'],
    link: { href: `${assetBase}/FSDL-Project.pdf`, label: 'Open the deck' }
  }
];

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'Java', 'SQL']
  },
  {
    category: 'ML / AI',
    items: ['PyTorch', 'LangChain', 'LLMs', 'RAG', 'NLP', 'Computer Vision']
  },
  {
    category: 'Platforms',
    items: ['AWS', 'Modal', 'Docker', 'GitHub Actions', 'MLflow', 'Langfuse']
  },
  {
    category: 'Practices',
    items: ['MLOps', 'Experimentation', 'Observability', 'System Design', 'Technical Writing']
  }
];

const education = [
  {
    degree: 'M.S. Computer Science · Machine Learning',
    school: 'Georgia Institute of Technology',
    period: '2024 – Present',
    details: [
      'Coursework: Robotics AI Techniques, ML for Trading, Big Data Systems, Game AI, NLP, Machine Learning.'
    ]
  },
  {
    degree: 'B.Sc. Computer Science',
    school: 'University of Southampton, UK',
    period: '2016 – 2019',
    details: [
      'Upper Second Class Honours with concentrations in Machine Learning, Computer Vision, and Cyber Security.'
    ]
  }
];

const contactLinks = [
  {
    icon: Mail,
    label: 'kramaiya3@gatech.edu',
    href: 'mailto:kramaiya3@gatech.edu'
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/kushalramaiya',
    href: 'https://in.linkedin.com/in/kushal-ramaiya-402504179'
  },
  {
    icon: Github,
    label: 'github.com/ramaiyaKushal',
    href: 'https://github.com/ramaiyaKushal'
  }
];

const CVWebsite = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navigateTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-slate-900 to-slate-950" />
        <div className="absolute inset-y-0 right-[-20%] w-[60%] bg-blue-500/10 blur-3xl" />

        <header className="relative z-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
            <div className="font-semibold tracking-tight">
              <span className="text-blue-400">Kushal</span> Ramaiya
            </div>
            <div className="hidden space-x-8 text-sm font-medium uppercase tracking-wide md:flex">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              className="rounded-full border border-white/20 p-2 text-slate-200 transition hover:border-white/40 hover:text-white md:hidden"
              onClick={() => setIsMobileNavOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {isMobileNavOpen && (
            <div className="mx-auto mb-6 w-[90%] max-w-3xl rounded-2xl border border-white/10 bg-slate-900/90 px-6 py-4 shadow-lg backdrop-blur">
              <div className="space-y-3 text-sm font-medium uppercase tracking-wide">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className="block w-full rounded-md px-3 py-2 text-left text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-8 md:pb-32 md:pt-24">
          <div className="grid gap-12 md:grid-cols-[1.5fr,1fr] md:items-center">
            <div className="space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
                Machine Learning Engineer · Software Developer · Student
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Crafting reliable and scalable AI solutions that drive impact.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                Hi, I&apos;m Kushal. I specialise in architecting LLM-enabled products, productionising ML research,
                and building the observability layers that keep models accountable. I love solving ambiguous platform
                problems end-to-end from the data flywheel to customer-facing experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:kramaiya3@gatech.edu"
                  className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
                >
                  Let&apos;s collaborate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="https://github.com/ramaiyaKushal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
                >
                  View GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur md:p-8">
              <div className="space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Snapshot
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-slate-900/70 p-4 shadow-inner shadow-black/20">
                      <div className="text-2xl font-semibold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-blue-100">
                  Currently building ML foundations and pursuing the Masters in Computer Science with a Machine Learning specialisation at Georgia Tech.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="relative z-10">
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-24">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Platforms and products I&apos;ve shaped</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              I thrive in environments where deploying resilient systems matters as much as experimenting quickly. Here are a few highlights.
            </p>
          </div>

          <div className="space-y-10 md:space-y-0 md:border-l md:border-white/10">
            {experience.map((role) => (
              <article
                key={`${role.company}-${role.title}`}
                className="relative md:pl-10 md:pb-12 md:last:pb-0"
              >
                <span className="absolute left-[-9px] top-8 hidden h-4 w-4 rounded-full border border-blue-400/50 bg-blue-500/30 shadow shadow-blue-500/40 md:block" />
                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg backdrop-blur md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                      <p className="text-sm text-blue-200">{role.company} · {role.location}</p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-4 text-slate-300">{role.summary}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {role.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-slate-900/40 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Projects</p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Selected work</h2>
              <p className="mt-4 max-w-3xl text-slate-300">
                From research prototypes to production services, here are projects that showcase my approach to machine
                learning systems design.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex h-full w-full flex-col rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg backdrop-blur md:p-8"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.command && (
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                        Try the API
                      </p>
                      <pre className="mt-2 overflow-x-auto rounded-xl border border-blue-500/20 bg-slate-900/80 p-4 text-xs text-blue-100">
                        <code>{project.command}</code>
                      </pre>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                    >
                      {project.link.label}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <div className="mb-12 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Skills</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Disciplined across the ML lifecycle</h2>
            <p className="mt-4 text-slate-300 md:max-w-3xl">
              My toolkit spans rapid prototyping, responsible deployment, and the communication needed to align
              stakeholders.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg backdrop-blur md:p-8"
              >
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="bg-slate-900/40 py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="mb-12 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Education</p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Academic foundations</h2>
              <p className="mt-4 text-slate-300 md:max-w-2xl">
                Formal training that underpins the engineering and research work I do today.
              </p>
            </div>

            <div className="space-y-6">
              {education.map((entry) => (
                <div
                  key={entry.degree}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg backdrop-blur md:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{entry.degree}</h3>
                      <p className="text-sm text-blue-200">{entry.school}</p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {entry.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {entry.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8 md:py-24">
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/30 via-slate-900 to-slate-950 p-8 shadow-2xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Let&apos;s build something people love.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-200">
              Whether you&apos;re exploring ML strategy, building GenAI features, or need a partner to stabilise existing
              systems, I&apos;d love to connect.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  <span className="break-words">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Kushal Ramaiya. All rights reserved.</p>
          <p>Built with React · Tailwind CSS · Lucide Icons</p>
        </div>
      </footer>
    </div>
  );
};

export default CVWebsite;
