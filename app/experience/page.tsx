import { Metadata } from "next";
import { MdOutlineWork, MdSchool } from "react-icons/md";

import Experience from "../components/Experience";

export const metadata: Metadata = {
  title: "Experiência",
  description: "O que aprendi com meus trabalhos.",
};

const experienceList = [
  {
    name: "Conveste",
    description:
      "Participei do desenvolvimento de uma aplicação de BI"
      + " da concepção até a entrada em produção, impactando a"
      + " entrega da companhia de forma positiva e gerando insights estratégicos.",
    achievements: [
      "Otimizações de APIs",
      "Melhoria seguindo o UI/UX",
      "Cultura de Testes",
    ],
    start: "Abril 2022",
    end: "Abril 2023",
  },
];

const educationList = [
  {
    name: "CS50",
    description: "Curso de ciência da computação de Harvard.",
    achievements: [],
    start: "Março 2024",
    end: "Até o momento",
  },
  {
    name: "Trybe",
    description:
      "Escola de Desenvolvimento Full Stack com projetos reais"
      + " realizados individualmente ou em equipes, seguindo"
      + " as melhores práticas do mercado.",
    achievements: [
      "Metodologias Ágeis",
      "Testes Unitários",
      "Desenvolvimento Full Stack",
    ],
    start: "Maio 2021",
    end: "Dezembro 2022",
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <Experience
        icon={MdOutlineWork}
        title="Experiência"
        experienceList={experienceList}
      />
      <Experience
        icon={MdSchool}
        title="Educação"
        experienceList={educationList}
      />
    </div>
  );
}
