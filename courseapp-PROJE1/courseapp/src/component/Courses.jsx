import React from 'react'

function Courses({ course }) {
    const { id, title, description, price, link, image } = course

    return (
        <div className='course'>
            <img className='img' src={image} width={200} height={200} />
            <h4 className='course-title'>{title}</h4>
            <h6 className='course-desc'>{description}</h6>
            <h3 className='course-price'>{price} TL</h3>
            <div className='course-link'>
                <a style={{ textDecoration: 'none' }} href={link}>Satın almak için.</a>
            </div>
        </div>
    )
}
export default Courses
