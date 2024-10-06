import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/product'
import Product from '../components/Product'

function ProductDetails() {
    const { id } = useParams();
    // useParams hook sayesinde ilgili id elimizde tuttuk
    return (
        <div>
            <h2>Ürün Detayları</h2>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id === id) {
                        return <Product product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails