import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Trajectory from "./components/Trajectory/Trajectory";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" id="scroll">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects embedded={false} />} />
          <Route path="/project" element={<Projects embedded={false} />} />
          <Route path="/trayectoria" element={<Trajectory />} />
          <Route path="/soluciones" element={<Trajectory />} />
          <Route path="/solutions" element={<Trajectory />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
