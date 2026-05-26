import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const skills = portfolioData.skills;

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {Object.entries(skills).map(([category, skillList]) => (

            <div
              key={category}
              className="bg-gray-800 p-6 rounded-2xl"
            >

              <h2 className="text-2xl font-bold capitalize text-blue-400 mb-5">
                {category}
              </h2>

              <div className="flex flex-wrap gap-3">

                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 px-4 py-2 rounded-full"
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
};

export default Skills;