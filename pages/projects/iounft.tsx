import { useState } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer"
import styles from "../../styles/iounft.module.css";

const IOUNFT = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <Layout title="ITCHSON - PROJECTS / IOU NFT">
      <div className={styles.pageContainer}>
        <h1 className={styles.projectTitle}>IOUNFT</h1>
        <div className={styles.tabContainer}>
          {["Overview", "Features", "Roadmap"].map((tab) => (
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
          {activeTab === "Features" && <div>Features content here...</div>}
          {activeTab === "Roadmap" && <div>Roadmap content here...</div>}
        </div>
      </div>
      <Footer/>
    </Layout>
  );
};

export default IOUNFT;
