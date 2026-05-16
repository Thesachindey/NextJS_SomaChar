import React from 'react';

const Item = ({item}) => {
    return (
        <div>
            <li>{item.name}</li>
        </div>
    );
};

export default Item;