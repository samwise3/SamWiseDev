import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import '../styles/styles.css';

function AboutMe() {
  return (
    <div className="page-container">
      <header>
        <h1>About Me</h1>
        <Navigation />
        <hr />
      </header>

      <main>
        <iframe 
          src="https://storymaps.com/stories/0938cc143057493798a54f592a6b67a5?header" 
          width="100%" 
          height="500px" 
          frameBorder="0" 
          allowFullScreen 
          allow="geolocation"
          title="Story Map"
          className="story-map"
        />
      </main>

      <Footer />
    </div>
  );
}

export default AboutMe;