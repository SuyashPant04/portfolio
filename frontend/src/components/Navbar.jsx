import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          Suyash Pant
        </Link>

        <div className="flex gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link to="/skills" className="hover:text-blue-400 transition">
            Skills
          </Link>

          <Link to="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>

          <Link to="/resume" className="hover:text-blue-400 transition">
            Resume
          </Link>

          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar