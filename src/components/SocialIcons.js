import React from 'react'
import "./SocialIcons.css"
import {AiFillTwitterCircle as Twitter, AiOutlineInstagram as Instagram,AiOutlineYoutube as Youtube} from 'react-icons/ai'
function SocialIcons() {
    return (

        <div className='social-icons'>
            <a className='icon' href='https://twitter.com/PAX68127662' target='_blank'><Twitter/></a>
            <span className='icon' > <Instagram/></span> 
        <a className='icon'><Youtube/></a>
        </div>
    )
}

export default SocialIcons
