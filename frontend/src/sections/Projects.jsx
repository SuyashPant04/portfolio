import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300"
            >

              <h2 className="text-2xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">

                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;    