import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "kramaiya3@gatech.edu",
    href: "mailto:kramaiya3@gatech.edu",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/ramaiyaKushal",
    href: "https://github.com/ramaiyaKushal",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kushalramaiya",
    href: "https://www.linkedin.com/in/kushalramaiya/",
    Icon: Linkedin,
  },
];

export const Contact = () => (
  <div className="space-y-8">
    <header className="space-y-3">
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
        Contact
      </h2>
      <p className="max-w-2xl text-slate-600 dark:text-slate-300">
        Drop a note if you&apos;d like to collaborate, jam on an idea, or just
        chat about engineering, music, or travel.
      </p>
    </header>

    <div className="grid gap-6 md:grid-cols-[1.1fr,1fr]">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70">
        {contacts.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-blue-50 dark:hover:bg-slate-800/70"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-500/10 dark:text-blue-200">
              <Icon size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {label}
              </p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-200/70 via-blue-100 to-blue-50 p-6 text-slate-700 dark:border-slate-800 dark:from-blue-500/20 dark:via-slate-900 dark:to-slate-950 dark:text-slate-200">
        <div className="flex items-center gap-3">
          <MapPin size={20} />
          <h3 className="text-xl font-semibold">Currently in Atlanta, GA</h3>
        </div>
        <p className="mt-4 text-sm">
          Happy to travel or pair remotely—most of my work happens with
          distributed teams spread across time zones.
        </p>
        <p className="mt-4 text-sm">
          Need a quick intro call? Send a short agenda and a couple of slots,
          and I&apos;ll get back within a day.
        </p>
      </div>
    </div>
  </div>
);
