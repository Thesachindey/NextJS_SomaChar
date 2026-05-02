import React from 'react';

export async function generateMetadata({ params }) {
const {filePath} = await params;
  return {
    title:`File ${filePath}`,
  }
}

const FilePath = async ({params}) => {
console.log(await params);
const {filePath}= await params;
    return (
        <div className='text-2xl font-mono text-blue-400'>
            this is the file path page for the file path: 
            <span className='text-2xl font-mono text-taupe-500 hover:text-blue-500 cursor-pointer'>
                {
                   filePath?.join('/')
                }
            </span>
            
        </div>
    );
};

export default FilePath;
