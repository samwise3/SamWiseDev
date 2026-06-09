import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header>
        <Header />
      </header>

      <main>
        <div className="center">
          <p>Hi! I'm Sam, a 2026 graduate from the University of Virginia where I earned a BA in Computer Science and a BA Economics. 
          This interdisciplinary background has given me a unique perspective on how technology can drive meaningful change. I'm 
          particularly interested in sustainability and renewable energy, having studied sustainable development through UVA's <em>Odyssey 
          Through the Anthropocene</em> program and analyzed renewable energy companies like NextEra Energy through my involvement in the club, <em>Smart Women's Securities</em>.</p>
          <br/>
          <p>Last summer, I had the opportunity to intern at Liberty Mutual in their Boston office. As a member of their TechStart program, I worked on 
          an agile-development team, completing full-stack deliverables using Javascript, React, and GitHub Actions. It was a fantastic way to gain insight
          into the life cycle of a software product and experience the role of a software engineer. I was able to participate in ceremonies, demoing the
          work I completed, and collaborated with other interns to compete in the program's hackathon. I am excited to return as a full-time software engineer starting July 2026.
          </p>          
          <br/>
          <p>During my time at school, my involvement with extracurriculars like the <em>Google Developers Club</em> and work as a Project Consultant at <em>Enactus</em>, I continue to build both my 
          technical expertise and practical experience in implementing sustainable solutions and collaborating on diverse teams. My time as a member
          and mentor in <em>Women in Computer Science</em> has also provided impactful opportunities for growth and connection within the field.</p>
          <br />
          <p>Outside of academics, I enjoy soccer, skiing, mountain biking, fitness, and generally spending time outdoors. These interests have naturally reinforced my commitment
            to environmental preservation and sustainable technology.</p>
          
          <Link className="custom-link" to="/projects">
            View my Projects</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;