import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { generateRandomDate } from '@/utils/generateRandomDate';
import { getCategory } from '@/utils/getCategory';

const PostCard = ({ title, postId }) => {
  const date = generateRandomDate().toDateString();
  const category = getCategory(postId);

  return (
    <div className="w-[350px] w-sm px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{date}</span>
        <a
          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#">
          {category}
        </a>
      </div>
      <div className="mt-2">
        <h2 className="text-2xl text-gray-700 font-bold hover:text-gray-600 h-24 line-clamp-3">{title}</h2>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link
          className="text-blue-600 hover:underline"
          href={`/posts/${postId}`}>
          Read more
        </Link>
        <div>
          <a
            className="flex items-center"
            href="#">
            <div className="mx-4 w-10 h-10 relative">
              <Image
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                alt="avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="text-gray-700 font-bold">User</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
