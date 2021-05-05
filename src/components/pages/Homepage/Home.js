import React from 'react'
import "./Home.css"
import bgImage from '../../../assets/images/mcbg.jpeg'
import Jumbotron from '../../../components/Jumbotron';
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
