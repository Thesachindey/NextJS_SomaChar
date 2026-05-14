const page = async () => {
  //   const slowNetwork = await fetch("https://httpbin.org/delay/3"); // this will simulate a slow network and delay the response by 3 seconds. this is useful for testing the loading state of the component.
  //   const slowData = await slowNetwork.json();

  //   const slowNetwork2 = await fetch("https://httpbin.org/delay/1");
  //   const slowData2 = await slowNetwork2.json();

  //   const slowNetwork3 = await fetch("https://httpbin.org/delay/2");
  //   const slowData3 = await slowNetwork3.json();

  //   console.log(slowData);
  //   console.log(slowData2);
  //   console.log(slowData3);


//manual parallel data fetching with Promise.all
  const [slowData3, slowData1, slowData2] = await Promise.all([
    fetch("https://httpbin.org/delay/3"),
    fetch("https://httpbin.org/delay/1"),
    fetch("https://httpbin.org/delay/2"),
  ]);

  const x = await Promise.all([
    slowData3.json(),
    slowData1.json(),
    slowData2.json(),
  ]);
console.log(x);
// --------------------------------- 

// more dynamic way to do parallel data fetching with Promise.all and map method
//manual parallel data fetching with Promise.all
// const fetchData = async (url) => {
//   const response = await fetch(url);
//   return await response.json();
// };

// const urls = [
//   "https://procodrr.vercel.app?sleep=3000",
//   "https://procodrr.vercel.app?sleep=2000",
// ];
//   const results = await Promise.all(urls.map((URL) => fetchData(URL)));
//   console.log(results);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Notes Page</h1>
      <p className="text-gray-600">
        This is the notes page. It simulates a slow network by fetching data
        from a delayed API.
      </p>
      <p className="text-red-500 font-bold">
        And the manual parallel fetching is demonstrated here. That improve
        performance by reducing the total time needed to fetch all the data.
      </p>
    </div>
  );
};

export default page;
