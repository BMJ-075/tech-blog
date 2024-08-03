import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Github, BriefcaseBusiness } from "lucide-react";

const NavBar = (): React.JSX.Element => {
  return (
    <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="font-edu self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            The Dev Den
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center lg:order-2">
            <Button size="sm" variant={"ghost"} className="px-1">
              <span className="sr-only">Github</span>
              <Github className="size-5" />{" "}
            </Button>
            <span className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>
            <Button size="sm" variant={"ghost"} className="px-1">
              <span className="sr-only">My Website</span>
              <BriefcaseBusiness className="size-5" />{" "}
            </Button>
            <span className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>
            {/* TODO - this is for toggling theme */}
            {/* <Moon className="size-5" />
            <Sun className="size-5" />{" "} */}
            {/* <span className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span> */}
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/topic/typescript"
                className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
                aria-current="page"
              >
                Typescript
              </Link>
            </li>
            <li>
              <Link
                href="/topic/react"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                React
              </Link>
            </li>
            <li>
              <Link
                href="/topic/nextjs"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Next Js
              </Link>
            </li>
            <li>
              <Link
                href="/topic/doodle"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Doodle Dabble
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
