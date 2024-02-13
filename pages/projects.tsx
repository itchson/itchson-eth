import styles from '../styles/Projects.module.css';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Galaxy Royale: Ikinokoru",
    description: "Embark on an epic journey through the cosmos in this immersive web3 top-down space shooter. Dive into a universe teeming with rich lore and action-packed gameplay.",
    technologies: ["Game Development", "C#", "Web3"],
    link: "/projects/galaxy-royale",
  },
  {
    id: 2,
    title: "DALLE3-X-POST",
    description: "This project is an AWS Lambda function designed to generate and tweet daily AI-generated game art assets. It utilizes OpenAI's DALL-E 3 for image generation and the Twitter API for tweeting, aimed at providing free resources for game developers.",
    technologies: ["Java", "Lambda", "Open AI", "Twitter API"],  
    link: "/projects/dalle3-x-post",
  },
  {
    id: 3,
    title: "Color Infection",
    description: "Color Infection is an inventive arcade/puzzle game developed for Pirate Software Game Jam 14. In this engaging title, players control a central square to fend off advancing colored triangles, with each collision altering the square's color and abilities. It's a dynamic test of strategy and reflexes, where mixing and matching color infections is key to survival and high scores",
    technologies: ["Game Jam", "C#", "Arcade"],
    link: "/projects/color-infection",
  },
  {
    id: 4,
    title: "Portfolio Archive",
    description: "Explore my journey through past projects and see the evolution of my skills and creativity. This archive showcases a diverse range of work, from web3 innovations to AI-powered applications.",
    technologies: ["Web3", "LLM", "GPT API", "UNITY", "Game Development"],
    link: "/projects/portfolio-archive",
  },
];

const Projects = () => {
  return (
    <Layout title="ITCHSON - PROJECTS">
      <div className={styles.pageContainer}>
        <div className={styles.header}>Projects</div>
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <Link href={project.link} key={project.id}>
              <div className={styles.projectCard}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Footer/>
      </div>
    </Layout>
  );
};

export default Projects;
