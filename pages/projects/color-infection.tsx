import { useState } from "react";
import Layout from "../../components/Layout";
import Footer from '../../components/Footer';
import styles from "../../styles/galaxy-royale.module.css";

const ColorInfection = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Overview content with structured formatting for better readability
  const overviewContent = (
    <div>
      <h2 className={styles.overviewHeading}>Project Overview:</h2>
      <p>
        <ul>
        <li>Project Name: Color Infection</li>
        <li>Developed For: Pirate Software Game Jam 14</li>
        <li>Genre: Arcade/Puzzle</li>
        <li>Platform: PC</li>
        </ul>
      </p>

      <h2 className={styles.overviewHeading}>Description:</h2>
      <p>"Color Infection" is a vibrant and fast-paced arcade/puzzle game that challenges players to think quickly and strategize under pressure. Developed as an entry for Pirate Software Game Jam 14, this game puts players in control of a stationary white square at the center of the screen. The objective is to fend off an onslaught of colored triangles, each imparting a unique infection upon contact.</p>

      <h2 className={styles.overviewHeading}>Gameplay Mechanics:</h2>
      <p>Players must navigate the complexities of these infections, as each color alters the square's abilities for a brief period. The game's core mechanics revolve around color theory, where combining different infections results in new colors with distinct powers:
        <ul>
          <li>Red: Increases shooting speed.</li>
          <li>Blue: Grants a protective shield.</li>
          <li>Yellow: Yields exploding projectiles.</li>
          <li>Secondary Colors: Created by combining primary color infections, offering mixed abilities.</li>
        </ul>
      </p>

      <h2 className={styles.overviewHeading}>Unique Features:</h2>
      <p>
        <ul>
          <li>Dynamic Color Interaction: The game challenges players to strategically utilize color combinations.</li>
          <li>Engaging Arcade Action: Fast-paced gameplay that keeps players on the edge of their seats.</li>
          <li>Minimalist Aesthetic: Simple yet captivating geometric art style, focusing on gameplay and strategy.</li>
        </ul>
      </p>

      <h2 className={styles.overviewHeading}>Development Tools:</h2>
      <p>
        <ul>
          <li>Engine: Unity 2D URP</li>
          <li>Art: Simplistic geometric shapes and a vibrant color palette.</li>
          <li>Sound: Basic effects for actions like shooting and enemy destruction, with a looping background track to enhance the arcade feel.</li>
        </ul>
      </p>
      
      <h2 className={styles.overviewHeading}>Objective and Scoring:</h2>
      <p>Survival is the primary objective, with a scoring system that rewards players for destroying enemies in various colored states. This encourages experimentation with color combinations and strategic gameplay.</p>
      
      <h2 className={styles.overviewHeading}>Developer's Note:</h2>
      <p>As an indie developer and military veteran, I crafted "Color Infection" to explore the interaction of simple game mechanics with complex strategic possibilities. This project reflects my passion for innovative game design and my continuous exploration of new ideas in the gaming space.</p>
    </div>
  );

  return (
    <Layout title="ITCHSON - PROJECTS / DALLE3-X-POST">
      <div className={styles.pageContainer}>
        <h1 className={styles.projectTitle}>DALLE3-X-POST</h1>
        <div className={styles.tabContainer}>
          {["Overview", "Download"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? styles.activeTab : styles.inactiveTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          {activeTab === "Overview" && overviewContent}
          {activeTab === "Download" && (<div>
            <a 
              href="https://sutajio.itch.io/color-infection" 
              title="Download Color Infection" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Color Infection at itch.io
            </a>
          </div>)}
        </div>
      </div>
      <Footer/>
    </Layout>
  );
};

export default ColorInfection;

          

