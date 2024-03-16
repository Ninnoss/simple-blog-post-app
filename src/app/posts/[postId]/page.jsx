import { fetchData } from '@/utils/fetchData';
import React from 'react';
import Link from 'next/link';
import PostComments from '@/components/PostComments';

const PostInfo = async ({ params }) => {
  const { postId } = params;
  const post = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    cache: 'no-store',
  });

  // Create a longer body text by repeating the original body multiple times
  const longBody = Array.from({ length: 10 }, () => post.body).join(' ');

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative">
      <Link
        className="xl:flex items-center absolute top-9 -left-16 hidden"
        href="/posts">
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
        <span className="ml-2">All Posts</span>
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-700">{longBody}</p>
      </article>
      <PostComments />
    </section>
  );
};

export default PostInfo;
