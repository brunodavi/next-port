import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt, FaGithub, FaImage } from "react-icons/fa";
import IconButton from "../components/IconButton";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Minhas criações",
};

const projectList = [
  {
    image: "/room-pages-desktop.png",
    url: "https://room-page-six.vercel.app",
    repo: "room-page",

    name: "Room Pages",
    description: "Página estática de venda de móveis",

    tags: ["Next.js", "React", "TailwindCSS"],
  },
  {
    image: "/fast-todo-desktop.png",
    url: "https://fast-todo.fly.dev/docs",
    repo: "fast-todo",

    name: "Fast Todo",
    description: "API para gerenciar lista de tarefas",

    tags: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    image: "/quick-planner-desktop.png",
    url: "https://quick-planner.vercel.app",
    repo: "quick-planner",

    name: "Quick Planner",
    description: "Gerador rápido de rotinas no calendário",

    tags: ["Next.js", "React", "TailwindCSS", "Codemirror"],
  },
  {
    image: "/envclass-desktop.png",
    url: "https://pypi.org/project/envclass",
    repo: "envclass",

    name: "Envclass",
    description: "Biblioteca para gerenciar variáveis de ambiente",

    tags: ["Python"],
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
            <div className="flex gap-2 mt-2">
              <div className="flex flex-col w-3/4 gap-2">
                <h2 className="text-md font-semibold">
                  {project.name}
                </h2>
                <p>{project.description}</p>
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
              <div className="flex justify-end items-start w-1/4">
                <IconButton
                  url={`http://github.com/brunodavi/${project.repo}`}
                  icon={FaGithub}
                  iconSize={32}
                  className="m-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
