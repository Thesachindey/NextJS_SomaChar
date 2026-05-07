import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      Well come to the blog page!
      <div className="flex flex-col gap-5">
        <Link href={"/blog/1"}>View Blog Post1</Link>
        <Link href={"/blog/2"}>View Blog Post2</Link>
        <Link href={"/blog/3"}>View Blog Post3</Link>
      </div>
    </div>
  );
};

export default BlogPage;
