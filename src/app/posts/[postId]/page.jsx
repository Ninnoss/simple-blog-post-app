import { fetchData } from '@/utils/fetchData';
import React from 'react';
import Link from 'next/link';

const PostInfo = async ({ params }) => {
  const { postId } = params;
  const post = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    cache: 'no-store',
  });

  return (
    <section className="relative">
      {/* <Link
        className="xl:flex items-center absolute top-2 left-4 hidden"
        href="/posts">
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
        <span className="ml-2">Back to Posts</span>
      </Link> */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-lg text-gray-700">{post.body}</div>
      </article>
    </section>
  );
};

export default PostInfo;
