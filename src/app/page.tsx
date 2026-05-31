import React from 'react';

const  page = async () => {
  
  // console.log(await searchParams);
  // console.log(await params);
  return (
    <div className='container flex items-center justify-center flex-col mx-auto px-4 py-8 bg-[var(--bg)] text-[var(--text)] rounded-lg shadow-lg min-h-screen'>
      <h1 className='text-3xl font-bold text-center mt-10'>Welcome to SomaChar</h1>
      <p className='text-center mt-4 text-lg'>Your one-stop destination for all things anime and manga. Explore our extensive collection of characters, series, and more!</p>
    </div>
  );
};

export default page;