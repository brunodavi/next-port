import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import IconButton from "./components/IconButton";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-around items-center lg:h-[90vh] lg:flex-row">
        <div className="w-64 mt-10">
          <Image
            alt="profile"
            src="/profile.jpeg"
            width={256}
            height={256}
            className="bg-gray-300 rounded-full"
          />
          <div className="flex my-2 gap-3 justify-center">
            <IconButton
              url="mailto:brunodaviandrade2000+next-port@gmail.com"
              icon={MdAlternateEmail}
            />
            <IconButton
              url="http://github.com/brunodavi"
              icon={FaGithub}
            />
            <IconButton
              url="http://linkedin.com/in/brunodavi"
              icon={FaLinkedin}
            />
          </div>
        </div>
        <article className="prose-sm w-full lg:w-[30rem] px-5 mt-3 mb-5">
          <h1>&#128075; Olá, me chamo Bruno Davi</h1>

          <p className="text-lg">
            Moro em São Paulo e sou um desenvolvedor freelancer, com foco em
            criar experiências impactantes. Minhas principais ferramentas são:
            Python, TypeScript e Regex
          </p>

          <h2>Meus Interesses:</h2>
          <ul className="list-disc text-lg">
            <li>Inovação</li>
            <li>Seguraça</li>
            <li>Automação</li>
          </ul>
        </article>
      </div>
    </main>
  );
}
