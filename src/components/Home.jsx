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
          Hi! I'm Sam, a rising fourth-year student at the University of Virginia pursuing a double major in Computer Science and Economics. 
          This interdisciplinary background has given me a unique perspective on how technology can drive meaningful change. I'm 
          particularly interested in sustainability and renewable energy, having studied sustainable development through UVA's Odyssey 
          Through the Anthropocene program and analyzed renewable energy companies like NextEra Energy.

          Outside of academics, I enjoy soccer, skiing, and spending time outdoors. These interests have naturally reinforced my commitment 
          to environmental preservation and sustainable technology. As I work toward my graduation in May 2026, I'm focused on developing my 
          software engineering skills while exploring ways to contribute to renewable energy advancement.

          Through my involvement with the Google Developers Club and work as a Project Consultant at Enactus, I continue to build both my 
          technical expertise and practical experience in implementing sustainable solutions and collaborating on diverse teams. My time as a member
          and mentor in Women in Computer Science has also provided impactful opportunities for growth and connection within the field.
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
            <li>
              <a
                href="https://digitalforensicsregex.netlify.app/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Forensics Regex Escape Room
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