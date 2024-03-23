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
        <article className="prose-sm w-full lg:w-[30rem] px-5 mt-3 mb-5 ">
          <h1>&#128075; Olá, me chamo Bruno Davi</h1>

          <div className="text-lg lg:scroll-smooth lg:pr-3 lg:h-36 lg:overflow-y-scroll tiny-scroll">
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

            <p>
              Participei do desenvolvimento de uma aplicação de BI da concepção
              até a entrada em produção. Impactando a entrega da companhia de
              forma positiva, e gerando insights estratégicos.
            </p>

            <div>
              <p className="m-0">Acesse meu GitHub:</p>
              <Link className="text-blue-500 hover:underline" href="https://github.com/brunodavi?tab=repositories" target="_blank">
                https://github.com/brunodavi?tab=repositories
              </Link>
            </div>

            <p>Sinta-se à vontade para entrar em contato comigo:</p>

            <p className="m-0">Celular: +5511987364471</p>
            <p className="m-0">Recados: +5511961350072</p>
            <p className="m-0">E-mail: brunodaviandrade2000@gmail.com</p>
          </div>

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
