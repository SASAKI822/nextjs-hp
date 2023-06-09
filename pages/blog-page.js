import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/post";

const Blog = ({ posts }) => {
  return (
    <Layout title="Home">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
