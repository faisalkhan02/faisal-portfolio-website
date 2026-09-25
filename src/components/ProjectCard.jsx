function ProjectCard({ project }) {
    return (
        <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
            />

            <div className="p-6">

                <span className="text-cyan-400 text-sm">
                    {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                    {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-6">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition whitespace-nowrap"
                    >
                        View on GitHub
                    </a>

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
      className="flex-1 flex items-center justify-center border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white py-3 rounded-lg font-semibold transition whitespace-nowrap"
                        >
                            {project.buttonText}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;