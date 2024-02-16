import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt } from "react-icons/fa";

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

    tags: ["Next.js", "React", "TailwindCSS", "DaisyUI"],
  },
  {
    image: "/envclass-desktop.png",
    url: "https://github.com/brunodavi/envclass",

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
          <div key={index} className="flex flex-col my-1 mx-5 w-56 h-full rounded-lg">
            <Link
              href={project.url}
              target="_blank"
              className="cursor-pointer group"
            >
              <div className="relative">
                <div className="transition-all ease-in-out opacity-0 group-hover:opacity-100 bg-black/50 absolute w-full h-full rounded flex justify-center items-center text-white">
                  Visitar <FaExternalLinkAlt />
                </div>
                <Image
                  alt={project.name}
                  src={project.image}
                  width={256}
                  height={256}
                  className="w-full h-32 bg-gray-200 rounded"
                />
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
                  className="text-white font-semibold cursor-pointer bg-gray-400 rounded p-1 mr-1 hover:bg-gray-500 transition"
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
