import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  const { blogID } = await params;

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
      <h1>Blog post: {blogID} </h1>

      <Link href={"/blog"}>
        <button className="p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-bold cursor-pointer">
          Back to Blog Page
        </button>
      </Link>
    </div>
  );
};

export default BlogID;
