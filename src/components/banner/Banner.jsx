import React from 'react'
import './banner.scss';

function Banner({ saludo }) {
    return (
        <div className="banner-container">
            <h2 className="banner-title">{saludo}</h2>
        </div>
    )
}

export default Banner
 
 