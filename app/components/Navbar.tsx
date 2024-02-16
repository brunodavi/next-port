"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const thisPathname = usePathname();

  const pathTree = {
    "/": "Bio",
    "/projects": "Projetos",
    "/experience": "Experiência",
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
    <header className="flex justify-center items-center h-14 shadow-lg shadow-black/15 dark:shadow-[#202020]/30 dark:bg-[#101010]">
      <nav>
        <ul className="flex justify-around w-60 font-medium">
          {pathList}
        </ul>
      </nav>
    </header>
  );
}
