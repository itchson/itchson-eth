import Layout from "../../components/Layout";
import Footer from "../../components/Footer"
import styles from "../../styles/PortfolioArchive.module.css";

const PortfolioArchive = () => {
  const projects = [
    { title: "The Ground is Lava VR", description: "An immersive virtual reality experience created in Unity, 'VR The Ground is Lava' transforms a classic childhood game into an exhilarating adventure. Developed as a solo university project in 2015, this application is optimized for Oculus DK2 and invites players to navigate treacherous terrains in a 3D environment. Leverage your agility and wit to avoid the molten floor and reach your destination. It's a nostalgic yet futuristic take on the game we've all loved, reimagined for the virtual world." },
    { title: "AstroBoom", description: "AstroBoom is a top-down space shooter that fuses the visual aesthetics of classic games like 'Asteroids' with the gameplay mechanics of 'Diablo,' offering a click-to-move experience. Developed as a solo project during my bachelor's studies, this game is crafted using C++ and SDL2, providing a seamless and engaging gaming experience. Venture through cosmic landscapes, obliterate space rocks, and combat hostile entities as you navigate the universe. AstroBoom serves as a testament to the limitless possibilities of blending retro inspiration with modern game design." }
,
    // Add more old projects here
  ];

  return (
    <Layout title="ITCHSON - PROJECTS / Portfolio Archive">
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>Portfolio Archive</h1>
        <ul className={styles.projectList}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </Layout>
  );
};

export default PortfolioArchive;
