import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-200 dark:border-zinc-800 overflow-hidden transition hover:scale-[1.02] hover:shadow-2xl duration-300">
      {/* Top */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
            User #{post.userId}
          </span>

          <span className="text-sm font-medium">Post #{post.id}</span>
        </div>

        <h2 className="mt-4 text-xl font-bold leading-snug line-clamp-2 capitalize">
          {post.title}
        </h2>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
          {post.body}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Read More
          </button>

          <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition">
            ❤️ Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
