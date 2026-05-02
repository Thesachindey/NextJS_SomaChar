import { notFound } from "next/navigation";
import React from "react";


export async function generateMetadata({ params }) {
  const { blogID } =await params;

  return {
    title: `Blog ${blogID}`,
  };
}

const BlogID = async ({ params }) => {
  const { blogID } = await params;

  if (!/^[0-9]+$/.test(blogID)) {
    notFound();
  }

  return (
    <div>
      <h1>Blog post: {blogID}</h1>
    </div>
  );
};

export default BlogID;
