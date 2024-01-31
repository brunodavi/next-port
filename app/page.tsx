import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-around items-center lg:h-[90vh] lg:flex-row">
        <div className="w-64 mt-10">
          <Image
            alt="profile"
            src="/profile.webp"
            width={256}
            height={256}
            className="border rounded-full"
          />
          <div className="flex justify-center">
            <a
              href="mailto:brunodaviandrade2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAlternateEmail
                size={24}
                className="m-2 transition-colors text-black/50 hover:text-black"
              />
            </a>
            <a
              href="http://github.com/brunodavi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={24}
                className="m-2 transition-colors text-black/50 hover:text-black"
              />
            </a>
            <a
              href="http://linkedin.com/in/brunodavi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="m-2 transition-colors text-black/50 hover:text-black"
              />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[30rem] px-5 mt-3 mb-5">
          <h1 className="text-black text-2xl font-bold">
            👋 Olá, me chamo Bruno Davi
          </h1>
          <h2 className="text-black text-xl font-semibold mt-1">
            Moro em São Paulo, desenvolvedor freelancer, focando em criar
            experiências impactantes
          </h2>
          <p className="mt-3">
            Aprimorando minhas habilidades como desenvolvedor Full-Stack, com
            experiência em otimização de APIs, aprimoramento de UI/UX e
            capacidade de aprendizado rápido. Habilidades centrais incluem
            Python, Regex e Linux.
          </p>
          <p className="mt-3 font-bold">Meus interesses são:</p>
          <ul className="list-disc list-inside mt-1">
            <li>Inovação</li>
            <li>Segurança</li>
            <li>Automação</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
