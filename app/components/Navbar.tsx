"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const thisPathname = usePathname();

  const pathTree = {
    "/": "Bio",
    "/experience": "Experiência",
    "/projects": "Projetos",
  };

  const pathSelected = (pathname: string) =>
    thisPathname === pathname ? "font-bold" : "";

  const pathHover = (pathname: string) =>
    thisPathname !== pathname ? "hover:font-semibold" : "";

  const pathList = Object.entries(pathTree).map(([pathname, title], index) => (
    <li key={index} className={pathHover(pathname)}>
      <Link href={pathname} className={pathSelected(pathname)}>
        {title}
      </Link>
    </li>
  ));

  return (
    <header className="flex justify-around items-center h-14 shadow-lg dark:shadow-sm dark:bg-neutral-900">
      <nav>
        <ul className="flex justify-around w-60 font-medium">
          {pathList}
        </ul>
      </nav>
      <ThemeSwitch />
    </header>
  );
}
