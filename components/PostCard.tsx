import React from "react";

const PostCard = ({ post }): any => {
  return (
    <div>
      <h1 className="text-xl text-bold">{post.title}</h1>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
