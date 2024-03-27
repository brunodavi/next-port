import Image from "next/image";
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
        <article className="prose-sm w-full lg:w-[50rem] px-5 mt-10 mb-5">
          <h1>&#128075; Olá, me chamo Bruno Davi</h1>

          <div className="text-lg">
            <p>
              Com quatro anos de experiência em desenvolvimento Full-Stack, possuo
              proficiência em uma variedade de tecnologias essenciais para o
              desenvolvimento web. Meu domínio abrange tanto o ecossistema Python
              quanto outras linguagens e frameworks, como Node.js, TypeScript e
              .Net. Estou habituado a trabalhar com bancos de dados SQL e NoSQL,
              incluindo Postgres, MySQL e MongoDB, garantindo eficiência e
              segurança nos projetos. Além disso, minha experiência em ambientes
              de nuvem, como Azure, e em práticas de DevOps e metodologias ágeis,
              como Scrum, me capacitam a desenvolver soluções robustas e
              escaláveis. Estou comprometido em utilizar meu conhecimento para
              contribuir de forma significativa em novos desafios e projetos.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
