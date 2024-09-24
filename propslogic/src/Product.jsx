import React from 'react'

function Product(props) {
    const { productName, price } = props;
    return (
        <div>
            <div>Product İnformation</div>
            <div>
                <div>Name: {productName}</div>
                <div>Price: {price}TL</div>
            </div>
            <hr />
        </div>
    )
}

export default Product
