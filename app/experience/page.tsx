import { Metadata } from "next";
import { MdOutlineWork, MdSchool } from "react-icons/md";

export const metadata: Metadata = {
  title: "Experiência",
  description: "O que aprendi com meus trabalhos",
};

export default function Experience() {
  const experienceList = [
    {
      name: "Conveste",
      achievements: [
        "Otimizações de APIs",
        "Melhoria seguindo o UI/UX",
        "Cultura de Testes",
      ],
      dataEntrada: "Abril 2022",
      dataSaida: "Abril 2023",
    },
  ];

  const educationList = [
    {
      name: "Trybe",
      achievements: [
        "Metodologias Ágeis",
        "Testes Unitários",
        "Desenvolvimento Full Stack",
      ],
      dataEntrada: "Maio 2021",
      dataSaida: "Dezembro 2022",
    },
  ];

  return (
    <div>
      <div>
        <div className="mx-5 my-10">
          <h1 className="text-3xl font-bold">Experiência</h1>
        </div>
        <div className="mx-5">
          {experienceList.map((experience, index) => (
            <div key={index} className="my-5">
              <div>
                <div className="flex items-center">
                  <MdOutlineWork />
                  <h1 className="ml-2 font-bold">
                    {experience.name}
                  </h1>
                </div>
                <div className="pl-6">
                  <div>
                    <span>{experience.dataEntrada}</span>
                    {" - "}
                    <span>{experience.dataSaida}</span>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold">Conquistas:</p>
                    <ul className="list-inside list-disc">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mx-5 my-10">
          <h1 className="text-3xl font-bold">Educação</h1>
        </div>
        <div className="mx-5">
          {educationList.map((education, index) => (
            <div key={index} className="my-5">
              <div>
                <div className="flex items-center">
                  <MdSchool />
                  <h1 className="ml-2 font-bold">
                    {education.name}
                  </h1>
                </div>
                <div className="pl-6">
                  <div>
                    <span>{education.dataEntrada}</span>
                    {" - "}
                    <span>{education.dataSaida}</span>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold">Conquistas:</p>
                    <ul className="list-inside list-disc">
                      {education.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
