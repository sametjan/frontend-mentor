import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

/**
 * Home page for a collection of Frontend Mentor challenges.
 * Should include the following features:
 * - Instructions to use menu on the left to choose a challenge to view
 * - Pleasnt design with support for light and dark mode
 * - Responsive layout
 * @returns ReactElement
 */
export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1
          className="text-6xl font-bold text-balance"
          style={{ textWrap: 'balance' }}
        >
          Welcome to my Frontend Mentor solutions!
        </h1>
        <p className="mt-3 text-2xl">
          Get started by choosing a challenge from the menu on the left
        </p>
      </main>
    </div>
  );
}
