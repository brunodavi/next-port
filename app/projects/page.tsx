import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt, FaImage } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Minhas criações",
};

const projectList = [
  {
    image: "/room-pages-desktop.png",
    url: "https://room-page-six.vercel.app",

    name: "Room Pages",
    description: "Página estática de venda de móveis",

    tags: ["Next.js", "React", "TailwindCSS"],
  },
  {
    image: "/envclass-desktop.png",
    url: "https://pypi.org/project/envclass",

    name: "Envclass",
    description: "Biblioteca para gerenciar variáveis de ambiente",

    tags: ["Python"],
  },
  {
    image: "/fast-todo-desktop.png",
    url: "https://fast-todo.fly.dev/docs",

    name: "Fast Todo",
    description: "API para gerenciar lista de tarefas",

    tags: ["Python", "FastAPI", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <main>
      <div className="mx-5 my-10">
        <h1 className="text-3xl font-bold">Projetos</h1>
      </div>

      <div className="flex flex-wrap">
        {projectList.map((project, index) => (
          <div key={index} className="flex flex-col p-2 m-5 w-full h-full transition-colors ease-in-out border rounded-lg border-black/10 hover:border-black/20 dark:border-white/5 hover:dark:border-white/10">
            <Link
              href={project.url}
              target="_blank"
              className="cursor-pointer group"
            >
              <div className="relative flex flex-col">
                <div className="w-full h-32 lg:h-64 rounded animate-pulse flex justify-center items-center text-gray-500 bg-gray-300 absolute">
                  <FaImage size={64} />
                </div>
                <Image
                  alt={project.name}
                  src={project.image}
                  width={1024}
                  height={1024}
                  className="w-full h-32 lg:h-64 absolute object-cover object-top rounded"
                />
                <div className="w-full h-32 lg:h-64 transition-opacity ease-in-out opacity-0 group-hover:opacity-100 bg-black/50 absolute rounded flex justify-center items-center text-white">
                  Visitar <FaExternalLinkAlt />
                </div>
                <div className="w-full h-32 lg:h-64 rounded" />
              </div>
            </Link>
            <h2 className="text-md font-semibold mt-2">
              {project.name}
            </h2>
            <p className="my-2">{project.description}</p>
            <ul className="flex flex-wrap text-[10px]">
              {project.tags.map((tag, index) => (
                <li
                  key={index}
                  className="
                  p-[3px]
                  m-[3px]
                  text-white
                  font-semibold
                  cursor-default
                  bg-stone-700
                  hover:bg-stone-800
                  rounded
                  transition"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
