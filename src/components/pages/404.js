import React from 'react'
import "./404.css"
import {BrowserRouter as Router, Link} from 'react-router-dom';
import bgImage from '../../assets/images/404page.jpeg'

function NotFound() {
    return (
        <div className = 'wrapper' style= {{backgroundImage: `url(${bgImage})`}}>
<div className='layer'>
            <h1><span>404</span> Not Found</h1>
            <h2>Check URL</h2>
            <Link to='/'><p>Go Back</p></Link>
            </div>
        </div>
    )
}

export default NotFound
