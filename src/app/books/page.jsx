//dynamically rendered static page
import { cookies } from "next/headers";
import React from "react";

// export const dynamic='force-static';
// export const dynamic='error';
// export const dynamic='auto';

// export const dynamic='force-dynamic';
// this will force the page to be dynamic and will not generate static page for it.

const Books = async ({ searchParams }) => {
  // await searchParams;
  const myCookies = await cookies();
  console.log(myCookies);

  return <div>this is the books page!</div>;
};

export default Books;
