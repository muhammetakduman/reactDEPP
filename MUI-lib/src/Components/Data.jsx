import React from 'react';

function Data({ itemData }) {
    return (
        <div>
            {itemData.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Data;
