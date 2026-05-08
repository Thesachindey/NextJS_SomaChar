import Link from "next/link";
import React, { Suspense } from "react";
import Like from "../../components/Like";
import View from "../../components/View";
import Comment from "../../components/Comment";

const BlogPage = () => {
  return (
    <div>
      Well come to the blog page!
      <div className="flex flex-col items-center justify-center gap-5 ">
        <Link
          className="p-2 bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-md"
          href={"/blog/1"}>
          View Blog Post-1
        </Link>
        <Link
          className="p-2 bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-md"
          href={"/blog/2"}>
          View Blog Post-2
        </Link>
        <Link
          className="p-2 bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-md"
          href={"/blog/3"}>
          View Blog Post-3
        </Link>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-1">
        <Suspense fallback={<div>View is Loading...</div>}>
          <View />
        </Suspense>
        <Suspense fallback={<div>Like is Loading...</div>}>
          <Like />
        </Suspense>
        <Suspense fallback={<div>Comment is Loading...</div>}>
          <Comment />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogPage;
