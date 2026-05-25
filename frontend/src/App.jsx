import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Introduction from "./sections/Introduction"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Resume from "./sections/Resume"
import Contact from "./sections/Contact"

function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>
          <Route path="/" element={<Introduction />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Layout>

    </BrowserRouter>
  )
}

export default App