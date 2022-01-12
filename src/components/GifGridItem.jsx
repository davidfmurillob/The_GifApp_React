import React from 'react'

export const GifGridItem = ({url, id, title}) => {

// console.log({url,title,id});

    return (
        <div className='card animate__animated animate__fadeInLeft' >
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
