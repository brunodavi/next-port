import { MdOutlineWork, MdSchool } from "react-icons/md";

export default function Experience() {
  const experienceList = [
    {
      name: "Conveste",
      achievements: [
        "Otimizações de APIs",
        "Melhoria continua",
        "Configuração de Ambiente",
      ],
      dataEntrada: "Abril 2022",
      dataSaida: "Abril 2023",
    },
  ];

  const educationList = [
    {
      name: "Graduação Estácio",
      achievements: [
        "Hardware",
        "Arquitetura de Computadores",
        "Logarítmicos",
      ],
      dataEntrada: "Outubro 2023",
      dataSaida: "Concluindo",
    },
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
          <h1 className="text-black text-3xl font-bold">Experiencia</h1>
        </div>
        <div className="mx-5">
          {experienceList.map((experience, index) => (
            <div key={index} className='my-5'>
              <div>
                <div className="flex items-center">
                  <MdOutlineWork />
                  <h1 className='ml-2'>{experience.name}</h1>
                </div>
                <div className='pl-6'>
                  <div>
                    <span>{experience.dataEntrada}</span>
                    {' - '}
                    <span>{experience.dataSaida}</span>
                  </div>
                  <div className='mt-2'>
                    <p>Conquistas: </p>
                    <ul className='list-inside list-disc'>
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
          <h1 className="text-black text-3xl font-bold">Educação</h1>
        </div>
        <div className="mx-5">
          {educationList.map((education, index) => (
            <div key={index} className='my-5'>
              <div>
                <div className="flex items-center">
                  <MdSchool />
                  <h1 className='ml-2'>{education.name}</h1>
                </div>
                <div className='pl-6'>
                  <div>
                    <span>{education.dataEntrada}</span>
                    {' - '}
                    <span>{education.dataSaida}</span>
                  </div>
                  <div className='mt-2'>
                    <p>Conquistas: </p>
                    <ul className='list-inside list-disc'>
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
