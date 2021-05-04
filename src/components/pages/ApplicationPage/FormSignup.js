import React, {useState} from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import { appendErrors } from 'react-hook-form';
import "./Form.css"

const FormSignup = (submitForm) => {
    const {handleChange, values,handleSubmit,errors,} = useForm(submitForm,validate);

    return (
       <div className='form-content-right'>
           <form className='form' onSubmit={handleSubmit}>
        <h1>Get started with us today!</h1>

        <div className = 'form-inputs'>
            <label htmlFor='username' className='form-label'>
                Enter Your MC name: 
        <input type='text' name='username' placeholder='Steve....' value={values.username} onChange={handleChange}/>
            </label>
           
        </div>
        

        <div className = 'form-inputs'>
            <label htmlFor='email' className='form-label'>
Enter Your Email: 
        <input type='email' name='email' placeholder='steve@email.com....' value={values.username} onChange={handleChange}/>
            </label>
        </div>

        <div className = 'form-inputs'>
            <label htmlFor='username' className='form-label'>
                Discord : 
        <input type='text' name='username' placeholder='#7382' value={values.username} onChange={handleChange}/>
            </label>
        </div>

        <div className = 'form-inputs'>
            <label htmlFor='age' className='form-label'>
                Age: 
        <input type='number' name='age' placeholder='16....' id ='age' value={values.username} onChange={handleChange}/>
            </label>
        </div>

        <div className = 'form-inputs'>
            <label htmlFor='skills' className='form-label'>
                Skills : 
        <input type='text' name='skills' placeholder='(Building,Developing,Management...etc)' value={values.username} onChange={handleChange}/>
            </label>
            
        </div>

        <div className = 'form-inputs'>
            <label htmlFor='username' className='form-label'>
                 Position Wanted: 
        <input type='text' name='want' placeholder='(Admin,Builder,Mod....etc)' value={values.username} onChange={handleChange}/>
    
            </label>
        
        </div>

        <div className='form-inputs'>
<label htmlFor='description'>List Experience, and what you can bring to the table
<input type='textarea' value={values.username} onChange={handleChange}/>
</label>

</div>

        <button className='form-input-btn' type='submit'>Submit</button>
           </form>
       </div>
    )
}

export default FormSignup
