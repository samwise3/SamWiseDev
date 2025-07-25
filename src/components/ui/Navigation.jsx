import { Link, useLocation } from 'react-router-dom';
import '../../styles/styles.css';
import { routes } from '../../routes';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={location.pathname === route.path ? 'active' : ''}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;