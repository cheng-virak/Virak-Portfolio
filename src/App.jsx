import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './commponants/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './commponants/Footer';
import './style/App.css';

// Scroll to top automatically when route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app-shell">
      {/* Animated background layers */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-orb bg-orb--1" />
        <div className="bg-orb bg-orb--2" />
        <div className="bg-orb bg-orb--3" />
        <div className="bg-spotlight" />
        <div className="bg-light-streak" />
        <div className="bg-grid" />
        <div className="bg-grain" />
      </div>

      <ScrollToTop />
      <NavBar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
