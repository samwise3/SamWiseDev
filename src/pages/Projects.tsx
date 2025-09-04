import Header from "../components/ui/Header";
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
    },
    {
        title: "Hackathon Project: API-Integrated Energy Grid Dashboard",
        description: "A hackathon project that theoretically displays real-time energy consumption metrics based on real-time energy grid distribution data.",
        longDescription: "This project was developed using mocked API response data which was fed to our front-end React application. The dashboard displays metrics across various office locations," + 
        " to identify high-consuming areas and suggest optimizations. The project uses the variability of energy resources throughout the day to show energy consumption trends over time and location.",
        src: '',
        imgsrc: '/images/hackathon-screenshot.png',
        alt: 'Hackathon Project',
        tags: ["React", "API Integration", "Data Visualization"]

    }
]


function Projects() {

    return (
        <>
        <header>
            <Header/>
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