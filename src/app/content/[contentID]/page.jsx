import React from "react";

export const dynamicParams = false; // this will not generate static params and will generate page on demand when user request for it. it will not show 404 page if contentID is not in the list of static params. it will show 404 page if contentID is not in the list of static params when dynamicParams is true.

// app level isr
// export const revalidate = 2;//isr revalidate the page after 2 seconds and fetch the new data from the api. this is isr. 

//hard coded static params ssg
export function generateStaticParams(){
    return[
        {contentID:"1"},
        {contentID:"2"},
        {contentID:"3"},
        {contentID:"4"},

    ]
}

//ssg- dynamic static params
// export async function generateStaticParams() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   // console.log(data);
//   return data.map(({ id }) => ({ contentID: `${id}` }));
// }

const ContentID = async ({ params }) => {
  const { contentID } = await params;
  // --------fetchLevel-------------------------fetching data from api and revalidating it after 10 seconds using isr---------------------------------
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    next: { revalidate: 10 },
  }); // this will revalidate the data after 10 seconds and fetch the new data from the api. this is isr.
  const data = await response.json();
  console.log(data);
  //   --------------------------------------fetching data from api and revalidating it after 10 seconds using isr---------------------------------
  return (
    <div>
      Content ID: {contentID}
      <div className="p-5 text-2xl font-bold bg-amber-100 text-black rounded-2xl">
        {Date().toLocaleString()}
      </div>
    </div>
  );
};

export default ContentID;
