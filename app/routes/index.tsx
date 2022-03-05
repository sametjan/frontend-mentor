import { Link } from "remix";
import type { LinksFunction } from "remix";

import styles from "~/styles/routes/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div className="w-8/12 mx-auto">
      <p className="mb-3">
        This site will be the central repository for all of my completed
        challenges.{" "}
      </p>
      <h2 className="font-sans text-xl font-bold mb-3">Completed Challenges</h2>
      <ol className="list-decimal ml-10">
        <li>
          <Link
            to="/qr-code"
            className="underline underline-offset-2 text-slate-800
            dark:text-slate-200 hover:text-red-700 dark:hover:text-red-700"
          >
            QR code component
          </Link>
        </li>
      </ol>
    </div>
  );
}
