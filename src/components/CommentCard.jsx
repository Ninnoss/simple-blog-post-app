import React, { useState } from 'react';
import Image from 'next/image';

const CommentCard = ({ id, name, email, body, onDeleteComment, onUpdateComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(body);

  const handleDelete = () => {
    onDeleteComment(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onUpdateComment(id, editedBody);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedBody(body);
  };

  const handleChange = (e) => {
    setEditedBody(e.target.value);
  };

  return (
    <div className="border border-gray-300 p-4 rounded">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-4 relative">
            <Image
              src={`https://i.pravatar.cc/150?u=${email}`}
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full justify-self-start "
            />
          </div>
          <h3 className="font-bold max-w-36 md:max-w-none">{name}</h3>
        </div>

        {isEditing ? (
          <div className="flex space-x-4">
            <button
              className="text-green-500 hover:text-green-700 border border-green-500 px-3 py-1 rounded"
              onClick={handleSaveEdit}>
              Save
            </button>
            <button
              className="text-gray-500 hover:text-gray-700 border border-gray-500 px-3 py-1 rounded"
              onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex space-x-4  scale-90 md:scale-100">
            <button
              className="text-red-500 hover:text-red-700 border border-red-500 px-3 py-1 rounded"
              onClick={handleDelete}>
              Delete
            </button>
            <button
              className="text-blue-500 hover:text-blue-700 border border-blue-500 px-3 py-1 rounded"
              onClick={handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
      <p className="text-gray-600">{email}</p>
      {isEditing ? (
        <textarea
          className="border border-gray-300 px-2 py-1 rounded w-full resize-none"
          value={editedBody}
          onChange={handleChange}
        />
      ) : (
        <p className="mt-2">{body}</p>
      )}
    </div>
  );
};

export default CommentCard;
