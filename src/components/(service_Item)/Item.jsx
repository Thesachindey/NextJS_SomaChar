import React from 'react';

const Item = ({name}) => {
    if(typeof window !== 'undefined') {
        console.log('Item component rendered on the client side');
    }else{
        console.log('Item component rendered on the server side');
    }
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Item;