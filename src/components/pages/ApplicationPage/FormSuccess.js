import React from 'react'
import mcguy from "../../../assets/images/mcguy1.png"
const FormSuccess = () => {




    
    return (
        <div className='form-content-right'>
            <div className='form-success'>We have recieved your application!</div>
            <img src={mcguy} alt='success-image' className='form-img-2'/>
        </div>
    )
}

export default FormSuccess
