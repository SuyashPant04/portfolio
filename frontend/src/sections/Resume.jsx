function Resume() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-bold mb-10">
          Resume
        </h1>

        <p className="text-gray-400 mb-8">
          Download my latest resume below.
        </p>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition"
        >
          Download Resume
        </a>

      </div>
    </section>
  )
}

export default Resume