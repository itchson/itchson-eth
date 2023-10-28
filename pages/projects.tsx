import styles from '../styles/Projects.module.css';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Galaxy Royale",
    description: "Embark on an epic journey through the cosmos in this immersive web3 top-down space shooter. Dive into a universe teeming with rich lore and action-packed gameplay.",
    technologies: ["Game Development", "C#", "Web3"],
    link: "/projects/galaxy-royale",
  },
  {
    id: 2,
    title: "IOUNFT",
    description: "Revolutionize IOUs with Blockchain! Create, mint, and send unique IOU NFTs effortlessly. Seamlessly integrated with MetaMask. Transform informal promises into digital assets today!",
    technologies: ["Web3"],
    link: "/projects/iounft",
  },
  {
    id: 3,
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
