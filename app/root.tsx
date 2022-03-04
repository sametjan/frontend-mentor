import { useState } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import DarkModeToggle from "~/components/DarkModeToggle";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <html lang="en" className={`h-full ${darkMode ? "dark" : ""}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        <header className="flex items-center justify-end">
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
