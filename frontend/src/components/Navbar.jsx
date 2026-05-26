import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          Suyash Pant
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">

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

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            Resume
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar