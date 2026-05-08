import React from "react";

const Comment = async () => {
    
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>1k comments!</div>;
};

export default Comment;
