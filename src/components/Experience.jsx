import experience from "../data/experience";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Practical experience gained through internships and real-world
            projects.
          </p>
        </div>

        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl border border-slate-700 p-8 hover:border-cyan-400 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaBriefcase className="text-cyan-400 text-3xl" />

              <div>
                <h3 className="text-2xl font-bold">
                  {exp.title}
                </h3>

                <p className="text-cyan-400">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-sm">
                  {exp.duration}
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-8">
              {exp.description}
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              {exp.responsibilities.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;