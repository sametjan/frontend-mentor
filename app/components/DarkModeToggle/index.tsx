import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export default function DarkModeToggle({ onClick, value }) {
  return (
    <div className="flex items-center space-x-3">
      <SunIcon className="h-6 w-6 text-slate-800 dark:text-slate-200" />
      <Switch
        checked={value}
        onChange={onClick}
        className={`${value ? "bg-slate-600" : "bg-slate-200"}
        relative inline-flex flex-shrink-0 h-9 w-16 border-2 border-slate-500
        rounded-full cursor-pointer transition-colors ease-in-out duration-200
        focus:outline-none focus-visible:ring-2  focus-visible:ring-white
        focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Toggle Dark Mode</span>
        <span
          aria-hidden="true"
          className={`${value ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-8 w-8 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      <MoonIcon className="h-6 w-6 text-slate-800 dark:text-slate-200" />
    </div>
    // <button onClick={onClick}>{value ? "Disable" : "Enable"} dark mode</button>
  );
}
