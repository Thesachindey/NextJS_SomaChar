import React from 'react';

const CommentID = async ({params}) => {
    const{blogID, commentID} = await params;

    return (
        <div>
            this is the comment page of blog No: {blogID} & comment No: {commentID}
        </div>
    );
};

export default CommentID;
