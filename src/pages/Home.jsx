import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import '../styles/styles.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <Header />
        <Navigation />
      </header>

      <main>
        <div className="center">
          <p>Hi! I'm Sam, a rising fourth-year student at the University of Virginia pursuing a double major in Computer Science and Economics. 
          This interdisciplinary background has given me a unique perspective on how technology can drive meaningful change. I'm 
          particularly interested in sustainability and renewable energy, having studied sustainable development through UVA's Odyssey 
          Through the Anthropocene program and analyzed renewable energy companies like NextEra Energy.</p>
          <br/>          
          <p>Outside of academics, I enjoy soccer, skiing, and spending time outdoors. These interests have naturally reinforced my commitment 
          to environmental preservation and sustainable technology. As I work toward my graduation in May 2026, I'm focused on developing my 
          software engineering skills while exploring ways to contribute to renewable energy advancement.</p>
          <br/>
          <p>Through my involvement with the Google Developers Club and work as a Project Consultant at Enactus, I continue to build both my 
          technical expertise and practical experience in implementing sustainable solutions and collaborating on diverse teams. My time as a member
          and mentor in Women in Computer Science has also provided impactful opportunities for growth and connection within the field.</p>
          <br />
          <ul id="projects">
            <strong>Projects:</strong>
            {/*
            <li>
              <a 
                href="https://sulfurdioxidedatabase.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Stratospheric Sulfur Dioxide Database
              </a>
            </li>
            */}
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