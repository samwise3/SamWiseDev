import { Link, useLocation } from 'react-router-dom';
import '../../styles/styles.css';
import { navBarRoutes } from '../../routes';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        {navBarRoutes.map(route => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={
                route.path === '/articles'
                  ? location.pathname.startsWith('/articles') ? 'active' : ''
                  : location.pathname === route.path ? 'active' : ''
              }            
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