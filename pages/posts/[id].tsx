import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getSortedPostsData, getPostData, PostData } from '../../lib/posts';
import styles from '../../styles/Post.module.css';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

interface PostPageProps {
  postData: PostData;
}

const Post: React.FC<PostPageProps> = ({ postData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout title="ITCHSON - BLOG">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>{postData.title}</h1>
        </div>
        <div className={styles.contentContainer} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <Footer/>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSortedPostsData().map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
