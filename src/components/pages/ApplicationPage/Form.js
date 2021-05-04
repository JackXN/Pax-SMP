import React, {useState} from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess'
import "./Form.css"
import treeimg from '../../../assets/images/logo.svg'




function Form() {
    const[isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
        <div className = 'form-container'>
            <span className = 'close-btn'>x</span>
            <div className='form-content-left'>
                <img src={treeimg} alt='tree-img' className='form-img'/>
            </div>                                                                          
            {!isSubmitted ? (<FormSignup submitForm={submitForm}/>) : (<FormSuccess/>)}
        </div>
    </>
    )
}

export default Form
