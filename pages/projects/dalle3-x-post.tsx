import { useState } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer"
import styles from "../../styles/iounft.module.css";

const ColorInfection = () => {
  const [activeTab, setActiveTab] = useState("Overview");

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
        {activeTab === "Overview" && (
            <div className={styles.section}>
                <h2>Project Overview: DALLE3-X-POST</h2>
                <ul>
                  <li><strong>Project Name:</strong> DALLE3-X-POST</li>
                  <li><strong>Genre:</strong> Web Application</li>
                  <li><strong>Platform:</strong> AWS Lambda</li>
                </ul>
                <h2>Description:</h2>
                <p className={styles.paragraph}>
                  DALLE3-X-POST is an innovative AWS Lambda function project designed to automate the generation and sharing of AI-created game art assets on Twitter. Leveraging OpenAI's DALL-E 3 for high-quality image creation, this function targets game developers by providing them with daily inspirational art, fostering creativity and community engagement within the game development space.
                </p>
                <h2>Functionality and Features:</h2>
                <p className={styles.paragraph}>
                  The core functionality of DALLE3-X-POST revolves around its ability to:
                <ul>
                  <li>Automatically generate game art assets using OpenAI's DALL-E 3.</li>
                  <li>Post the generated images on Twitter with custom captions and hashtags to maximize visibility and engagement.</li>
                </ul>
                </p>
                <h2>Technical Stack:</h2>
                <ul>
                  <li>AWS Lambda: Hosts the automation script, ensuring scalability and reliability.</li>
                  <li>OpenAI API: Powers the AI-based image generation process.</li>
                  <li>Twitter API: Facilitates the posting of images to a designated Twitter account.</li>
                  <li>Node.js: The backend framework used for creating the Lambda function.</li>
                </ul>
                <h2>Setup and Deployment:</h2>
                <p className={styles.paragraph}>
                  Setting up DALLE3-X-POST involves several steps, from securing API keys to deploying the function on AWS Lambda. This process ensures a smooth operation and seamless integration between the services.
                </p>
                <h2>Developer's Note:</h2>
                <p className={styles.paragraph}>
                  As a project that sits at the intersection of AI and game development, DALLE3-X-POST represents my exploration into automating creative processes. It embodies my commitment to supporting the game development community by providing accessible, high-quality game art assets that inspire and facilitate the creative process.
                </p>
            </div>
        )}
        {activeTab === "Download" && (
          <div>
            <a 
              href="https://github.com/itchson/dalle3-x-post" 
              title="Download DALLE3-X-POST" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download DALLE3-X-POST
            </a>
          </div>
        )}

        </div>
      </div>
      <Footer/>
    </Layout>
  );
};

export default ColorInfection;
