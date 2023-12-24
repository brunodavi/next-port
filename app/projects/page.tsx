import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Minhas criações',
}

export default function Projects() {
  const projectList = [
    {
      image: "/room-pages-desktop.png",
      url: "https://room-page-six.vercel.app",

      name: "Room Pages",
      description: "Página estática de venda de móveis",
    },
  ];

  return (
    <main>
      <div className="mx-5 my-10">
        <h1 className="text-black text-3xl font-bold">Projetos</h1>
      </div>

      <div className="flex flex-wrap">
        {projectList.map((project, index) => (
          <Link
            href={project.url}
            target="_blank"
            key={index}
            className="my-3 mx-5 w-56 rounded-lg cursor-pointer group"
          >
            <div className="relative">
              <div className="transition-all ease-in-out opacity-0 group-hover:opacity-100 bg-black/50 absolute w-full h-full rounded flex justify-center items-center text-white gap-1">
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
            <h2 className="text-black text-md font-semibold my-2">
              {project.name}
            </h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
