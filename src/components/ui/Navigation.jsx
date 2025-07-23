import { Link } from 'react-router-dom';
import '../../styles/styles.css';

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/articles">Articles</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;