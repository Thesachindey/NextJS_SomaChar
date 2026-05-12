"use client";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
//data fetching in client component is a bit tricky as we have to handle the loading state and other things. we can use the useEffect hook to fetch the data when the component mounts and set the data in the state. we can also use the revalidate option to revalidate the data after a certain time and fetch new data from the api.
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {/* Header */}
        <section className="px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Modern Posts
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dynamic responsive post cards with automatic dark mode support.
          </p>
        </section>

        {/* Cards Grid */}
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))} 
          </div>
        </section>
      </main>
    </div>
  );
};

export default Posts;
