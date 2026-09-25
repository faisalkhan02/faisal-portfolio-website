import { FaUserGraduate, FaDatabase, FaBrain } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for Data
            Analytics, Data Science, and Machine Learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

  <h3 className="text-3xl font-bold mb-6">
    Data Analyst &
Data Science |
    <span className="text-cyan-400"> Machine Learning Enthusiast</span>
  </h3>

  <p className="text-gray-400 leading-8 mb-6">
    I am currently pursuing a Master of Computer Applications (MCA) with a
    strong interest in Data Analytics, Data Science, and Machine Learning.
    I enjoy transforming raw data into meaningful insights and building
    intelligent solutions to solve real-world problems.
  </p>

  <p className="text-gray-400 leading-8 mb-6">
    My expertise includes data cleaning, exploratory data analysis (EDA),
    predictive modeling, data visualization, and developing machine learning
    models using Python and Scikit-learn. I am passionate about continuous
    learning and applying data-driven approaches to business challenges.
  </p>

  <div className="flex flex-wrap gap-3 mt-8">
    <span className="bg-cyan-500/10 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full text-sm">
      📊 Data Analytics
    </span>

    <span className="bg-cyan-500/10 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full text-sm">
      📈 Data Science
    </span>

    <span className="bg-cyan-500/10 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full text-sm">
      🤖 Machine Learning
    </span>
  </div>

</div>

          {/* Right */}
          <div className="space-y-6">

  <h3 className="text-3xl font-bold mb-2">
    Education
  </h3>

  {/* MCA */}
  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
    <FaUserGraduate className="text-3xl text-cyan-400 mb-4" />

    <h4 className="text-xl font-semibold">
      Master of Computer Applications (MCA)
    </h4>

    <p className="text-cyan-400 mt-2">
      2025 – Present
    </p>

    <p className="text-gray-400 mt-2">
      KIET Group of Institutions,
      Delhi-NCR, Ghaziabad
    </p>
  </div>

  {/* BA */}
  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
    <FaUserGraduate className="text-3xl text-cyan-400 mb-4" />

    <h4 className="text-xl font-semibold">
      Bachelor of Arts (B.A.)
    </h4>

    <p className="text-cyan-400 mt-2">
      2019 – 2022
    </p>

    <p className="text-gray-400 mt-2">
      Mahatma Jyotiba Phule Rohilkhand University,
      Bareilly, Uttar Pradesh
    </p>
  </div>

</div>

        </div>
      </div>
    </section>
  );
}

export default About;