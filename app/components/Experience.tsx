import { IconType } from "react-icons"

type Experience = {
  name: string,
  description: string,
  achievements: string[],
  start: string,
  end: string,
}

type PropType = {
  icon: IconType,
  title: string,
  experienceList: Experience[],
}

export default function Experience(props: PropType) {
  return (
    <div>
      <div className="mx-5 my-10">
        <h1 className="text-3xl font-bold">{props.title}</h1>
      </div>
      <div className="mx-5">
        {props.experienceList.map((experience: Experience) => (
          <div key={experience.name} className="my-5">
            <div>
              <div className="flex items-center">
                <props.icon />
                <h1 className="ml-2 font-bold">
                  {experience.name}
                </h1>
              </div>
              <div className="pl-6">
                <div>
                  <span>{experience.start}</span>
                  {" - "}
                  <span>{experience.end}</span>
                </div>
                <p className="w-80 lg:w-96">{experience.description}</p>
                <div className="mt-2">
                  {
                    (experience.achievements.length > 0) && (
                      <p className="font-bold">Conquistas:</p>
                    )
                  }
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
  )
}
