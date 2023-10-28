import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const navItems = document.querySelector('.' + styles.navItems) as HTMLElement;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        navItems.classList.remove(styles.navItemsHidden);
      } else {
        navItems.classList.add(styles.navItemsHidden);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    const navItems = document.querySelector('.' + styles.navItems) as HTMLElement;
    if (!isNavOpen) {
      navItems.classList.remove(styles.navItemsHidden);
    } else {
      navItems.classList.add(styles.navItemsHidden);
    }

    setIsNavOpen(!isNavOpen);
  };

  const isActive = (path: string) => {
    return router.pathname === path || 
           (path === '/' && router.pathname.startsWith('/posts')) || 
           (path === '/projects' && router.pathname.startsWith('/projects'));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className={styles.hamburger} onClick={toggleNav}>
          <div className={`${styles.bar} ${isNavOpen ? styles.crossBar1 : ''}`}></div>
          <div className={`${styles.bar} ${isNavOpen ? styles.crossBar2 : ''}`}></div>
          <div className={`${styles.bar} ${isNavOpen ? styles.crossBar3 : ''}`}></div>
        </div>
      </div>
      <div className={`${styles.navItems} ${styles.navItemsHidden}`}>
        <hr className={styles.horizontalRule} />
        <Link 
          href="/" 
          className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}
        >
          BLOG
        </Link>
        <Link 
          href="/projects" 
          className={`${styles.navLink} ${isActive('/projects') ? styles.navLinkActive : ''}`}
        >
          PROJECTS
        </Link>
        <Link 
          href="/faq" 
          className={`${styles.navLink} ${isActive('/faq') ? styles.navLinkActive : ''}`}
        >
          FAQ
        </Link>
        <div className={`${styles.socialLinks} ${styles.navItemsHidden} ${isNavOpen ? 'show' : ''}`}>
          <Link href="https://discord.gg/dshHkKt">
            <img className={styles.socialLink} src="/images/icons/Discord_Icon.svg" alt="Discord Icon" />
          </Link>
          <Link href="https://kick.com/itchson">
            <img className={styles.socialLink} src="/images/icons/Kick_Icon.svg" alt="Kick Icon" />
          </Link>
          <Link href="https://x.com/itchson">
            <img className={styles.socialLink} src="/images/icons/X_Icon.svg" alt="X Icon" />
          </Link>
          <Link href="https://youtube.com/@itchson">
            <img className={styles.socialLink} src="/images/icons/YouTube_Icon.svg" alt="YouTube Icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
