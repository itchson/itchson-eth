import { useState } from "react";
import Layout from "../../components/Layout";
import Footer from '../../components/Footer';
import styles from "../../styles/galaxy-royale.module.css";

const GalaxyRoyale = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Overview content with structured formatting for better readability
  const overviewContent = (
    <div>
      <h2 className={styles.overviewHeading}>A Universe Awaits: Legacy, Conflict, and Survival</h2>
      <p>"Galaxy Royale: Ikinokuro" invites players into a metaverse where the legacy of human ingenuity collides with the boundless potential of AI. Crafted by ITCHSON, this groundbreaking survival game offers a universe teeming with life, legacy, and conflict.</p>

      <h2 className={styles.overviewHeading}>The Kikai: Sentinels of the Cosmos</h2>
      <p>The Kikai, powered by radiant Kessho crystals, embody the aspirations of their creators. Players will navigate a complex society, fostering alliances and unraveling cosmic mysteries.</p>

      <h2 className={styles.overviewHeading}>The Kaiji: Echoes of Despair</h2>
      <p>The Kaiji, counterparts to the Kikai, wield chaos against the galaxy. This dark presence adds depth, challenging players to confront existential dilemmas and explore the galaxy's darker corners.</p>

      <h2 className={styles.overviewHeading}>Galaxy Royale: The Ultimate Arena</h2>
      <p>At the heart of the universe is Galaxy Royale, where champions compete for glory. Players, guiding Guritchi Hogo, a Kikai with a unique glitched crystal, will battle foes and unveil secrets that could alter the galaxy's fate.</p>
    </div>
  );

  return (
    <Layout title="ITCHSON - PROJECTS / Galaxy Royale">
      <div className={styles.pageContainer}>
        <h1 className={styles.projectTitle}>Galaxy Royale: Ikinokoru</h1>
        <div className={styles.tabContainer}>
          {["Overview", "Download", "Patch Notes"].map((tab) => (
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
          {activeTab === "Download" && <div>Download coming soon...</div>}
          {activeTab === "Patch Notes" && <div>Patch Notes coming soon...</div>}
        </div>
      </div>
      <Footer/>
    </Layout>
  );
};

export default GalaxyRoyale;
