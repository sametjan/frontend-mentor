import { useState } from "react";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";

import DarkModeToggle from "~/components/DarkModeToggle";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <html lang="en" className={`h-full ${darkMode ? "dark" : ""}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200">
        <header className="p-4 flex items-center justify-between mb-4 border-b-2 border-slate-200 dark:border-slate-600">
          {location.pathname !== "/" ? (
            <Link
              to="/"
              className="inline-block px-3 py-2 rounded text-slate-800 dark:text-slate-200
              hover:bg-slate-300 hover:text-slate-600 dark hover:bg-slate-600 dark:hover:text-slate-300"
            >
              &larr; Back
            </Link>
          ) : (
            <h1 className="font-sans text-3xl font-extrabold">
              Fontend Mentor Projects
            </h1>
          )}
          <DarkModeToggle onClick={toggleDarkMode} value={darkMode} />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
