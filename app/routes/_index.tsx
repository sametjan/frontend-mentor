import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="m-20">
      <h1 className="text-2xl font-bold text-slate-900 mb-3">
        Welcome to Remix
      </h1>
      <ul className="list-disc">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-700 hover:underline underline-offset-2"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-700 hover:underline underline-offset-2"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-700 hover:underline underline-offset-2"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
