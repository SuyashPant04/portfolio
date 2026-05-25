function Projects() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-12 text-center">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              URL Shortener
            </h2>

            <p className="text-gray-400">
              Full stack URL shortener application built using
              Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Demand Forecasting
            </h2>

            <p className="text-gray-400">
              Forecasting project using SARIMA models and
              business performance analysis.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects