'use client';
import React, { useState, useEffect } from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import { fetchData } from '@/utils/fetchData';
import CommentsPlaceholder from './CommentsPlaceholder';

const PostComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await fetchData('https://jsonplaceholder.typicode.com/comments');
      setComments(data.slice(0, 5)); // only show first 5 comments from the API
      setLoading(false); // Set loading to false once comments are loaded
    };

    fetchComments();
  }, []);

  const handleAddComment = async (comment) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId: comments.length + 1,
        name: 'User',
        email: 'user@example.com',
        body: comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const newComment = await res.json();
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = async (commentId) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: 'DELETE',
    });

    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleUpdateComment = async (commentId, updatedComment) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        body: updatedComment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    // Update the state with the updated comment data
    setComments((prevComments) =>
      prevComments.map((comment) => (comment.id === commentId ? { ...comment, body: updatedComment } : comment))
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-3">Comments</h2>
      <div className="flex flex-col gap-4">
        {loading ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <CommentsPlaceholder key={index} />
            ))}
          </>
        ) : (
          comments.map((comment) => (
            <CommentCard
              id={comment.id}
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
              onDeleteComment={handleDeleteComment}
              onUpdateComment={handleUpdateComment}
            />
          ))
        )}
        <CommentForm onAddComment={handleAddComment} />
      </div>
    </div>
  );
};

export default PostComments;
