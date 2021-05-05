import React from 'react'
import "./SocialIcons.css"
import {AiFillTwitterCircle as Twitter, AiOutlineInstagram as Instagram,AiOutlineYoutube as Youtube} from 'react-icons/ai'
function SocialIcons() {
    return (

        <div className='social-icons'>
            <span className='icon'><Twitter/></span>
            <span className='icon'> <Instagram/></span> 
        <span className='icon'><Youtube/></span>
        </div>
    )
}

export default SocialIcons
