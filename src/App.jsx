import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Articles from './pages/Articles';
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import './styles/styles.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
  );
}

export default App;