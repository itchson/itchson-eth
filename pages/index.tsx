import { getSortedPostsData, PostData } from '../lib/posts';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

interface HomeProps {
  allPostsData: PostData[];
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <div className={styles.header}> BLOG </div>
      <section className={styles.blogList}>
        {allPostsData.map(({ id, date, title, metaDescription }) => (
          <article key={id} className={styles.blogPost}>
            <Link href={`/posts/${id}`}>
              <div className={styles.blogLink}>
              <span className={styles.blogTitle}>{title}</span>
                <div className={styles.blogImage}>
                  <img src={`/images/posts/${id}.png`} alt={title} />
                </div>
                <div className={styles.blogDate}>{date}</div>
                <p className={styles.blogExcerpt}>{metaDescription}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
      <Footer/>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
