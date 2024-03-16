import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [formData, setFormData] = useState({
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(formData.comment);
    setFormData({
      comment: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8">
      <textarea
        id="comment"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Write a comment..."
        className="border border-gray-300 px-2 py-1 rounded w-full resize-none"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
