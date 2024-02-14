import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import styles from './Layout.module.css';
import RainingPixels from '../utils/RainingPixels';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div className={styles.layoutContainer}>
    <RainingPixels />
    <Head>
      <title>{title ? `${title}` : 'ITCHSON'}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.navbarContainer}>
      <Navbar />
    </div>
    <main className={styles.mainContent}>{children}</main>
  </div>
);

export default Layout;