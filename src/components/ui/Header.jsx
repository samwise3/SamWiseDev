import { Link } from 'react-router-dom';
import '../../styles/styles.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header-banner">
      <div className="header-inner">
        <Link to="/" className="header-left">
          <img
            id="profile"
            src="/images/profile.jpg"
            alt="Profile Picture"
          />
          <span className="header-name">Sam Wise Brooks</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
