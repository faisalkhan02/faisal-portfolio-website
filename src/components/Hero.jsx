import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-slate-950
        text-white
        overflow-hidden
        pt-18
      "
    >
      <div
        className="
          min-h-[calc(100vh-72px)]
          flex
          flex-col
          lg:flex-row
        "
      >

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            lg:w-1/2
            min-h-[calc(100vh-72px)]
            flex
            items-center
            px-8
            sm:px-12
            lg:px-16
            xl:px-20
            py-20
            lg:py-0
            relative
            z-20
          "
        >
          <div className="w-full max-w-2xl">

            {/* Hello */}
            <p className="text-cyan-400 text-lg font-semibold mb-4">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="
              text-5xl
              sm:text-6xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              leading-tight
            ">
              Faisal
              <br />
              Khan
            </h1>

            {/* Typing Animation */}
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Data Science Enthusiast",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="
                block
                text-2xl
                lg:text-3xl
                text-cyan-400
                font-semibold
                mt-6
              "
            />

            {/* Description */}
            <p className="
              mt-8
              text-gray-400
              leading-8
              max-w-xl
            ">
              Passionate about transforming raw data into meaningful insights
              using Data Analytics, Machine Learning, and AI-driven solutions.
              I enjoy solving real-world business problems through data.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* Resume */}
              <a
                href="/resume/Faisal_Khan_DA_ML_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-7
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  cursor-pointer
                  inline-block
                "
              >
                View Resume
              </a>

              {/* Projects */}
              <button
                type="button"
                onClick={scrollToProjects}
                className="
                  border
                  border-cyan-500
                  text-cyan-400
                  hover:bg-cyan-500
                  hover:text-white
                  px-7
                  py-3
                  rounded-xl
                  transition
                  cursor-pointer
                "
              >
                View Projects
              </button>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-3xl">

              {/* GitHub */}
              <a
                href="https://github.com/faisalkhan02"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/faisal-khan-77690b249/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto:faisal143saifi@gmail.com"
                className="hover:text-cyan-400 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>
        </motion.div>


        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            lg:w-1/2
            min-h-[60vh]
            lg:min-h-[calc(100vh-72px)]
            relative
            overflow-hidden
            flex
            items-center
            justify-center
          "
        >

          {/* Cyan Glow */}
          <div
            className="
              absolute
              w-125
              h-125
              bg-cyan-500/20
              blur-[120px]
              rounded-full
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          />

          {/* Profile Image */}
          <img
            src="/images/profile/image.png"
            alt="Faisal Khan"
            className="
              relative
              z-10
              w-full
              h-full
              object-cover
              object-center
            "
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;