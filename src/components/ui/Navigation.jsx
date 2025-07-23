import { Link } from 'react-router-dom';
import '../../styles/styles.css';
import { routes } from '../../routes';

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;