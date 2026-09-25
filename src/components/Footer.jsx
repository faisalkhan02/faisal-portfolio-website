import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Faisal <span className="text-cyan-400">Khan</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-sm">
              Data Analyst | Data Science | Machine Learning
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-4 text-gray-400">
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#experience" className="hover:text-cyan-400 transition">
                Experience
              </a>

              <a
                href="#certificates"
                className="hover:text-cyan-400 transition"
              >
                Certificates
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right">

            <h3 className="text-lg font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex md:justify-end gap-4">

              <a
                href="https://github.com/faisalkhan02"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/faisal-khan-77690b249/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:faisal143saifi@gmail.com"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Faisal Khan. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 transition cursor-pointer"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;