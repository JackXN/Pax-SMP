import React from 'react'
import bgImage from '../../../assets/images/aboutuspage.png'
import "./About.css"
function About() {
    return (
        <div className='wrapper'style = {{backgroundImage: `url(${bgImage})`}}>
            <div className='layer'>
                <h1 id='title'>About <span id='pax'>PAX</span> <span>SMP</span></h1>
            <div className='content'>
                <p>Officially created in 2021,<br/>
Pax amp is an amplified smp vanilla
Minecraft server.</p>
<br/>
A completely customized smp experience.
<br/>Some of what we offer includes
<br/>
            <ul>
                <li>Custom Items</li>
                <li>Custom Story Lines</li>
                <li>Daily Rewards</li>
                <li>Boss Battles</li>
            </ul>
            
            </div>
            </div>
        </div>
    )
}

export default About
