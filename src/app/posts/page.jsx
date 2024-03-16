import { fetchData } from '@/utils/fetchData';
import PostCard from '../../components/PostCard';

const Posts = async () => {
  const posts = await fetchData('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 30 } });
  return (
    <section className="py-6">
      <div className="flex flex-wrap justify-center gap-10">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            postId={post.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
