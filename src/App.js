import './App.css';
import Navbar from "./components";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages"
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import About from "./pages/about"


function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
  );
}

export default App;
