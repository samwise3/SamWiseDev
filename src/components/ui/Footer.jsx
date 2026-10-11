import '../../styles/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sam Wise Brooks. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/samwise3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/samanthawbrooks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
