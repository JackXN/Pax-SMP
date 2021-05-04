import React, {useState} from "react";
import "./Application.css"
import bgImage from '../../../assets/images/mcbg.png'
import Form from './Form';

const Application = () => {

return (
    <div className = 'wrapper' style= {{backgroundImage: `url(${bgImage})`}}>
        <Form/>
    </div>
)

}


export default Application