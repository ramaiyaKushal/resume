import { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { Github, Mail, Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Talks", to: "/talks" },
  { label: "TIL", to: "/til" },
  { label: "Travel", to: "/travel" },
  { label: "Contact", to: "/contact" },
];

const baseNavLink =
  "text-sm font-semibold transition-colors hover:text-blue-600 dark:hover:text-blue-300";

const getNavClassName = ({ isActive }) =>
  [
    baseNavLink,
    isActive
      ? "text-blue-600 dark:text-blue-300"
      : "text-slate-500 dark:text-slate-300",
  ].join(" ");

const socials = [
  {
    href: "mailto:kramaiya3@gatech.edu",
    label: "Email Kushal",
    Icon: Mail,
  },
  {
    href: "https://github.com/ramaiyaKushal",
    label: "GitHub profile",
    Icon: Github,
  },
];

const prefersDarkScheme =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)");

export const Layout = () => {
  const [isDark, setIsDark] = useState(() => {
    if (!prefersDarkScheme) {
      return true;
    }
    return prefersDarkScheme.matches;
  });

  useEffect(() => {
    if (!prefersDarkScheme) {
      return;
    }
    const handler = (event) => setIsDark(event.matches);
    prefersDarkScheme.addEventListener("change", handler);
    return () => prefersDarkScheme.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  const ThemeIcon = useMemo(() => (isDark ? Sun : Moon), [isDark]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 pb-12 pt-10 md:px-8 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600 dark:text-blue-300">
              Portfolio
            </p>
            <h1 className="mt-2 text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Kushal Ramaiya
            </h1>
          </div>
          <div className="flex items-center gap-5 md:gap-6">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-500">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={getNavClassName}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setIsDark((value) => !value)}
              className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
              aria-label="Toggle color theme"
            >
              <ThemeIcon size={18} />
            </button>
          </div>
        </header>

        <main className="flex-1 py-10">
          <Outlet context={{ isDark }} />
        </main>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">
          <span>© {new Date().getFullYear()} Kushal Ramaiya</span>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1 transition hover:text-blue-600 dark:hover:text-blue-300"
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export const useLayoutContext = () => useOutletContext() ?? { isDark: true };
