import type { LinksFunction } from "remix";

import styles from "~/styles/routes/qr-code.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function QRCode() {
  return (
    <div className="h-full grid place-items-center">
      <div className="font-sans bg-white dark:bg-slate-700 text-center w-80 rounded-[20px] p-4 shadow-2xl shadow-black/5">
        <img
          src="/images/image-qr-code.png"
          alt="QR code"
          className="mb-6 rounded-[10px]"
        />
        <p className="font-bold text-[1.375rem] text-dark-blue dark:text-slate-300 mb-4 tracking-normal">
          Improve your front-end skills by building projects
        </p>
        <p className="text-[0.9375rem] text-blue-gray dark:text-slate-400 font-normal tracking-wider">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
