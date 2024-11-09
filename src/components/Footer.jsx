import { Link } from 'react-router-dom';
import '../CSS/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sam Wise Brooks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;