import React from 'react';

const  page = async ({searchParams, params }) => {
  
  console.log(await searchParams);
  console.log(await params);
  return (
    <div>
      
    </div>
  );
};

export default page;