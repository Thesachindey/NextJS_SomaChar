import React from 'react';


// export function generateStaticParams(){
//     return[
//         // {contentID:"1"},
//         // {contentID:"2"},
//         // {contentID:"3"},
//         // {contentID:"4"},

//     ]
// }

export const dynamicParams=false; // this will not generate static params and will generate page on demand when user request for it. it will not show 404 page if contentID is not in the list of static params. it will show 404 page if contentID is not in the list of static params when dynamicParams is true.

export async function generateStaticParams(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await response.json();
    // console.log(data);
    return data.map(({id})=> ({contentID:`${id}`}))
}


const ContentID =async ({params}) => {
    const {contentID} = await params;
    return (
        <div>
            Content ID: {contentID}
        </div>
    );
};

export default ContentID;