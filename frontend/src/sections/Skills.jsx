function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Flask",
    "Node.js",
    "MongoDB",
    "TailwindCSS",
    "Git",
    "Machine Learning",
    "Data Analysis"
  ]

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-12 text-center">
          Skills
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-500 px-6 py-3 rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills