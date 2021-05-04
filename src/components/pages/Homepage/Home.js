import React from 'react'
import "./Home.css"
import bgImage from '../../../assets/images/mcbg.png'
import Jumbotron from '../../../components/Jumbotron';
import {Link, BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import ApplyBtn from '../../ApplyBtn';
import ServerStatus from '../../ServerStatus';
function Home() {
    return (
        <div className = 'wrapper' style= {{backgroundImage: `url(${bgImage})`}}> 
          <div className = 'layer'>
            
        <Jumbotron/>
        </div>
        </div>
    )
}

export default Home
