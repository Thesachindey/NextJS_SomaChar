import React from "react";
// export const metadata = {
//     title: "Blog",
//       description: "POGO is an AI assistant designed to help elementary school students with their homework and learning. It provides personalized support and guidance to make learning fun and engaging.",
// }

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1 className="p-4 bg-amber-200 text-black text-2xl font-mono text-center">
        My Blog Header{" "}
      </h1>
      <div className="min-h-screen">{children}</div>

      <h3 className="p-4 bg-amber-200 text-black text-2xl font-mono text-center">this is the blog footer</h3>
    </div>
  );
};

export default BlogLayout;
