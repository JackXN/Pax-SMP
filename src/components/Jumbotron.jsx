import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.svg'
import "./Jumbotron.css"
import ApplyBtn from './ApplyBtn';
import App from '../App';
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
       </div>
    )
}

export default Jumbotron
