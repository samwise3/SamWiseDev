import Header from "../components/ui/Header";
import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer"; 
import Card from "../components/common/Card";
import '../styles/styles.css';  


const projects = [
    {
        title: 'Regex Escape Room',
        description: 'A fun and interactive way to learn about regular expressions through a virtual escape room.',
        longDescription: 'This project uses React, TypeScript, and Netlify. It features multiple puzzles and tracks user progress.',
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