import React from 'react';

export const metadata = {
    title: 'Blog Comments',
    description: 'This is the blog comments page'
};

const BlogComments =async ({params}) => {
    const {blogID}=await params;
    return (
        <div>
            this is the blog comments page for blog No: {blogID}
        </div>
    );
};

export default BlogComments;