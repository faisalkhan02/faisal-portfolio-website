import skillCategories from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Tools, technologies, and frameworks i use in
            <span className="text-cyan-400"> Data Analytics</span>,
            <span className="text-cyan-400"> Data Science</span>, and
            <span className="text-cyan-400"> Machine Learning</span>.
          </p>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-slate-700 hover:bg-cyan-500 transition px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;