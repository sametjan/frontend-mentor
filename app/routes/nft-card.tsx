import type { LinksFunction } from "remix";

import styles from "~/styles/routes/nft-card";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export default function NFTCard() {
  return (
    <div className="h-full grid place-items-center">
      <div className="w-[21.875rem] font-outfit font-normal bg-white dark:bg-very-dark-blue-600 text-slate-700 dark:text-soft-blue p-6 rounded-[15px]">
        <div className="flex flex-col">
          <div className=" border-b-[1px] border-b-very-dark-blue-200">
            <a
              href="#"
              className="block relative group overflow-hidden rounded-lg mb-6"
            >
              <img
                src="/images/image-equilibrium.jpg"
                alt="Equilibrium artowrk"
                className="aspect-square"
              />
              <div className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bg-fm-cyan/50 absolute top-0 left-0 w-full h-full grid place-items-center">
                <img
                  src="/images/icon-view.svg"
                  alt="View artwork"
                  className="w-10 h-10"
                />
              </div>
            </a>
            <a
              href="#"
              className="inline-block text-slate-600 dark:text-white hover:text-slate-800 dark:hover:text-fm-cyan font-semibold text-[1.375rem] mb-4"
            >
              Equilibrium #3429
            </a>
            <p className="font-light leading-[1.625rem] mb-6">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex justify-between text-base mb-6">
              <div className="flex items-center text-cyan-600 dark:text-fm-cyan space-x-1.5">
                <svg
                  viewBox="0 0 11 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-5 fill-cyan-600 dark:fill-fm-cyan"
                >
                  <path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" />
                </svg>
                <span>
                  0.041{" "}
                  <abbr title="Ethereum" className="no-underline">
                    ETH
                  </abbr>
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <svg
                  viewBox="0 0 17 17"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" />
                </svg>
                <span>3 days left</span>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-4 mt-4">
            <img
              src="/images/image-avatar.png"
              alt="User avatar"
              className="w-8 h-8 ring-2 ring-slate-800 ring-offset-2   rounded-full"
            />
            <p class="text-base">
              Creation of{" "}
              <a
                href="#"
                className="text-slate-600 dark:text-white hover:text-slate-800 dark:hover:text-fm-cyan"
              >
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
