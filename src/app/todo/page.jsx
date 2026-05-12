import React, { Suspense } from "react";
import TodosData from "../../components/(api)/TodosData";
import Todos3 from "../../components/(api)/Todos3";
import Todos15 from "../../components/(api)/Todos15";

const Todo = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  //   const slowNetwork = await fetch("https://httpbin.org/delay/3"); // this will simulate a slow network and delay the response by 3 seconds. this is useful for testing the loading state of the component.
  // const slowData = await slowNetwork.json();
  // console.log(slowData);
  // ------------------------
  // data fetching in server component is much easier than client component as we can directly fetch the data and use it in the component without worrying about the loading state and other things. we can also use the revalidate option to revalidate the data after a certain time and fetch new data from the api.
  // const response = await fetch(
  //   "https://jsonplaceholder.typicode.com/todos?_limit=8",
  //   {
  //     next: { revalidate: 60 }, // this will revalidate the data every 60 seconds and fetch new data from the api.
  //   }
  // );

  // const todos = await response.json();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 px-6 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Todo Tasks
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Dynamic responsive todo cards with automatic theme support.
        </p>
      </section>

      {/* delaying 3s */}
      <Suspense fallback={<div>Loading after 3s...</div>}>
        <Todos3 />
      </Suspense>
      {/* delaying 15s */}
      <Suspense fallback={<div>Loading after 15s...</div>}>
        <Todos15 />
      </Suspense>
      {/* Todo Grid */}
      <Suspense fallback={<div>Loading todos...</div>}>
        <TodosData />
      </Suspense>
    </div>
  );
};

export default Todo;
