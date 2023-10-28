import { useState } from "react";
import Layout from "../../components/Layout";
import Footer from '../../components/Footer';
import styles from "../../styles/galaxy-royale.module.css";

const GalaxyRoyale = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <Layout title="ITCHSON - PROJECTS / Galaxy Royale">
      <div className={styles.pageContainer}>
        <h1 className={styles.projectTitle}>Galaxy Royale</h1>
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
          {activeTab === "Overview" && <div>Overview content here...</div>}
          {activeTab === "Download" && <div>Download content here...</div>}
          {activeTab === "Patch Notes" && <div>Patch Notes content here...</div>}
        </div>
      </div>
      <Footer/>
    </Layout>
  );
};

export default GalaxyRoyale;
