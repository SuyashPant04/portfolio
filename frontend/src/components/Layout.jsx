import Navbar from "./Navbar"
import Footer from "./Footer"
import Chatbot from "./Chatbot"

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

      <Chatbot />

    </div>
  )
}

export default Layout