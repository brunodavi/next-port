import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <div className="flex h-[90vh] justify-around items-center">
        <div className="w-[30rem]">
          <h1 className="text-black text-2xl font-bold">
            👋 Olá, me chamo Bruno Davi
          </h1>
          <h2 className="text-black text-xl font-semibold mt-1">
            Moro em São Paulo, criando experiencias como desenvolvedor
            freelancer
          </h2>
          <p className="mt-2">
            Desenvolvedor full stack com expertise em otimização de APIs,
            melhoria de UI/UX e facilidade em aprender rapidamente. Habilidades
            centrais incluem Python, regex, shell e experiência em criação de
            projetos colaborativos na Trybe
          </p>
          <p className="mt-2">Meus interesses são:</p>
          <ul className="list-disc list-inside mt-1">
            <li>Produtividade</li>
            <li>Praticidade</li>
            <li>Segurança</li>
          </ul>
        </div>
        <div className="w-64">
          <Image
            alt="profile"
            src="/profile.jpeg"
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
      </div>
    </main>
  );
}
