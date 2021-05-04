import React from 'react'
import "./404.css"
import bgImage from '../../assets/images/404page.png'

function NotFound() {
    return (
        <div className = 'wrapper' style= {{backgroundImage: `url(${bgImage})`}}>
<div className='layer'>
            <h1><span>404</span> Not Found</h1>
            <h2>Check URL</h2>
            </div>
        </div>
    )
}

export default NotFound
