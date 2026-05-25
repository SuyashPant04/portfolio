function Contact() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-10 text-center">
          Contact
        </h1>

        <div className="bg-gray-800 p-8 rounded-xl space-y-4">

          <input
            type="text"
            placeholder="Suyash Pant"
            className="w-full p-4 rounded bg-gray-700 outline-none"
          />

          <input
            type="email"
            placeholder="suyashpant1903@gmail.com"
            className="w-full p-4 rounded bg-gray-700 outline-none"
          />

          <textarea
            rows="6"
            placeholder="Type your message here..."
            className="w-full p-4 rounded bg-gray-700 outline-none"
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </div>

      </div>
    </section>
  )
}

export default Contact