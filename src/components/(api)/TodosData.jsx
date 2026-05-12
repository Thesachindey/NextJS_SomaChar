const TodosData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=8",
    {
      next: { revalidate: 60 }, // this will revalidate the data every 60 seconds and fetch new data from the api.
    },
  );

  const todos = await response.json();
  return (
    <>
      <section className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl shadow-lg p-6 transition hover:scale-[1.02] hover:shadow-2xl">
            {/* Top */}
            <div className="flex items-center justify-between">
              <span className="text-sm px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
                User #{todo.userId}
              </span>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                #{todo.id}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-5 text-xl font-bold text-gray-900 dark:text-white capitalize line-clamp-3">
              {todo.title}
            </h2>

            {/* Status */}
            <div className="mt-6">
              {todo.completed ?
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 font-medium">
                  ✅ Completed
                </div>
              : <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 font-medium">
                  ⏳ Pending
                </div>
              }
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                View
              </button>

              <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition">
                ⭐ Save
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TodosData;
