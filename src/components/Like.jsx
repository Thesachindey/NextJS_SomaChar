"use client";
import React, { useState } from "react";

const Like = () => {
  //   await new Promise((resolve) => setTimeout(resolve, 4000));
  const [Likes, setLikes] = useState(0);

  return <div onClick={() => setLikes((previousValue) => previousValue + 1)}>{Likes} likes!</div>;
};

export default Like;
