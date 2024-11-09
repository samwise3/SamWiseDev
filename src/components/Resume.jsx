import Navigation from './Navigation';
import Footer from './Footer';
import '../CSS/styles.css';

function Resume() {
  return (
    <div className="page-container">
      <header>
        <h1>Resume</h1>
        <Navigation />
        <hr />
      </header>

      <main className="resume-container">
        <iframe
          src="/src/Resume.pdf"
          title="Resume"
          className="resume-viewer"
        />
      </main>

      <Footer />
    </div>
  );
}

export default Resume;