import Link from 'next/link';
import styles from '../styles/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>Page Not Found</p>
        <p className={styles.message}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href="/" passHref>
          <div className={styles.link}>Go back to Home</div>
        </Link>
      </div>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.svg" alt="Logo" />
      </div>
    </div>
  );
};

export default Custom404;
