import React from 'react';

const Like = async () => {
    
  await new Promise((resolve) => setTimeout(resolve, 4000));
  
    return (
        <div>
            10k likes!
        </div>
    );
};

export default Like;