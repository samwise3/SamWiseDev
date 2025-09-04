import '../../styles/styles.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header-banner">
      <div className="header-left">
        <img 
          id="profile" 
          src="/images/profile.jpg" 
          alt="Profile Picture" 
        />
        <h1>Sam Wise Brooks</h1>
      </div>
      <div className="header-right">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;