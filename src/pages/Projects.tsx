import Header from "../components/ui/Header";
import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer"; 
import Card from "../components/common/Card";
import '../styles/styles.css';  


const projects = [
    {
        title: 'Regex Escape Room',
        description: 'A fun and interactive way to learn about regular expressions through a virtual escape room.',
        longDescription: 'This project uses React, TypeScript, and Netlify. It features multiple puzzles to give users practice with regex expression for data forensics.' +
        ' Each  puzzle requires users to apply the correct regex search query to successfully determine the scope of the data breach. It was developed with React and uses Netlify for CI/CD.' +
        ' To populate the puzzles and relevant mocked data, I utilize artificial intelligence to generate imitation data sets',
        src: 'https://digitalforensicsregex.netlify.app/\#',
        imgsrc:'',
        alt: 'Regex Escape Room',
        tags: ["React", "Regular Expressions", "Netlify"]
    }
]
function Projects() {

    return (
        <>
        <header>
            <Header/>
            <Navigation />
        </header>
        <div className="cards-list">
            {projects.map((project, index) => (
                <Card 
                    key={index} 
                    title={project.title} 
                    description={project.description}
                    src={project.src} 
                    imgsrc={project.imgsrc} 
                    alt={project.alt}
                    tags={project.tags}
                    longDescription={project.longDescription}
                />
            ))}
        </div>

        <Footer/>
        </>
    )
}

export default Projects;