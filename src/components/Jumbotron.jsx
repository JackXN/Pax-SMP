import React from 'react'

import "./Jumbotron.css"
import ApplyBtn from './ApplyBtn';
import SocialIcons from './SocialIcons';
import ServerStatus from "./ServerStatus";





function Jumbotron() {
    return (
        <div className = 'container'>
            <ServerStatus/>
            <div className = 'intro'>
       <h1>PAX <br/> <span>SMP</span></h1>
       </div>
       <div className='applybtn'>
           <ApplyBtn/>
       </div>
       <div className='socialIcons'>
           <SocialIcons/>
       </div>
       </div>
    )
}

export default Jumbotron
