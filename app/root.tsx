import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import styles from './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

interface Challenge {
  path: string;
  title: string;
  difficulty: string;
}

interface Challenges {
  [difficulty: string]: Challenge[];
}

export function loader(): Challenges {
  const challenges = fs
    .readdirSync(path.join('app', 'routes'))
    .filter((file) => file.match(/^frontend-mentor\..*\.mdx$/))
    .map((file) => {
      const { data } = matter.read(path.join('app', 'routes', file));
      const meta = data.meta.reduce((acc, cur) => ({ ...acc, ...cur }), {});
      return {
        path: `/${file.replace(/(.*?)\.(.*?)\.mdx/, '$1/$2')}`,
        title: meta.title,
        difficulty: data.difficulty ?? 'unknown',
      };
    })
    // Group by difficulty
    .reduce((acc, cur) => {
      if (!acc[cur.difficulty]) {
        acc[cur.difficulty] = [];
      }
      acc[cur.difficulty].push(cur);
      return acc;
    }, {});
  return challenges;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const challenges = useLoaderData();

  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                      <div className="flex h-16 shrink-0 items-center">
                        {/* Logo goes here */}
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {Object.entries(challenges).map(
                                ([difficulty, challenges]) => (
                                  <li key={difficulty} className="mb-3">
                                    <div className="flex items-center h-8 px-2">
                                      <div className="flex-1 text-xs font-semibold leading-6 text-white uppercase tracking-wider">
                                        {difficulty}
                                      </div>
                                    </div>
                                    <ul
                                      role="list"
                                      className="flex flex-1 flex-col gap-y-1"
                                    >
                                      {challenges.map((challenge) => (
                                        <li key={challenge.path}>
                                          <NavLink
                                            to={challenge.path}
                                            className="flex items-center h-8 px-2 text-sm font-medium text-white rounded-md hover:bg-gray-800"
                                            prefetch="intent"
                                          >
                                            {challenge.title}
                                          </NavLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                )
                              )}
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
              <div className="flex h-16 shrink-0 items-center">
                {/* Logo goes here */}
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <NavLink
                      to="/"
                      className="flex items-center h-8 px-2 text-sm font-medium text-white rounded-md hover:bg-gray-800"
                      prefetch="intent"
                    >
                      <HomeIcon
                        className="flex-shrink-0 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {Object.entries(challenges).map(
                        ([difficulty, challenges]) => (
                          <li key={difficulty} className="mb-3">
                            <div className="flex items-center h-8 px-2">
                              <div className="flex-1 text-xs font-semibold leading-6 text-white uppercase tracking-wider">
                                {difficulty}
                              </div>
                            </div>
                            <ul
                              role="list"
                              className="flex flex-1 flex-col gap-y-1"
                            >
                              {challenges.map((challenge) => (
                                <li key={challenge.path}>
                                  <NavLink
                                    to={challenge.path}
                                    className="flex items-center h-8 px-2 text-sm font-medium text-white rounded-md hover:bg-gray-800"
                                    prefetch="intent"
                                  >
                                    {challenge.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 text-sm font-semibold leading-6 text-white">
              Dashboard
            </div>
          </div>

          <main className="py-10 lg:pl-72">
            <div className="px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
