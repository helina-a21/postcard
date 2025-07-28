
import React, { useState } from "react";

const PostCard = ({ user, postText, postImage }) => {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => setLikes(likes + 1);

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-6 p-4">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={user.imageUrl}
          alt={user.name}
          className="w-12  h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold">{user.name}</h2>
        </div>
      </div>
      {postImage && (
        <img  className=' max-w-md'src={postImage} alt="Post"  />
      )}
      <p className="mb-4">{postText}</p>
      <div className="flex items-center space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleLike}
        >
          Like ({likes})
        </button>
        <form onSubmit={handleComment} className="flex space-x-2">
          <input
            type="text"
            className="border rounded px-2 py-1"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button  
                      type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Comment
          </button>
        </form>
      </div>
      <div>
        {comments.map((c, i) => (
          <div key={i} className="text-sm text-gray-700 border-t pt-2 mt-2">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;