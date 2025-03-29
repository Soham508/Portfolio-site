import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './Layout';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';



function App() {
  return (
    <Router>
      <Routes>
        {/* Wrapping all routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;