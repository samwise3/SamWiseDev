import Navigation from './Navigation';
import Footer from './Footer';
import '../CSS/styles.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="profile-container">
          <div className="profile-info">
            <img 
              id="profile" 
              src="/images/profile.jpg" 
              alt="Profile Picture" 
            />
          </div>
          <div className="profile-info">
            <h1>Sam Wise Brooks</h1>
          </div>
        </div>
        <Navigation />
      </header>

      <main>
        <div className="center">
          <p>
            Hi! My name is Sam an I am a third year at the University of Virginia double majoring in computer science and 
            Economics. I love to travel, play soccer, ski, and spend time outdoors. Passionate about sustainability
            and the future of renewable energy, I hope to utilize my background in software to continue the progress
            that has been made over the recent years. I expect to graduate in May 2026.
          </p>
          <br />
          <ul id="projects">
            <strong>Projects:</strong>
            <li>
              <a 
                href="https://sulfurdioxidedatabase.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Stratospheric Sulfur Dioxide Database
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;