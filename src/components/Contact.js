import {React, useState} from "react";
import { validateEmail } from "../utils/helpers";

const Contact = ()=>{
    const [firstInput, setfirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('')
    const [thirdInput, setThirdInput] = useState('')
    const formSubmit = (e)=>{
        e.preventDefault()
        if (!validateEmail(secondInput) || !firstInput) {
            alert('Invalid email or name')
            return;
        }
        if(!thirdInput) {
            alert('Message Required')
            return;
        }
        localStorage.setItem('Name', firstInput)
        localStorage.setItem('Email', secondInput)
        localStorage.setItem('Message', thirdInput)
        setfirstInput('')
        setSecondInput('')
        setThirdInput('')
    }
  const inputChange = (e) => {
     const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setfirstInput(inputValue)
        } else if (inputType === 'email') {
            setSecondInput(inputValue)
        } else if (inputType === 'message') {
            setThirdInput(inputValue)
        }
  }
    return(
        <div className="contactPage">
            <h2>Contact</h2>
            <form className='contactForm' onSubmit={formSubmit}>
                <h3>Name:</h3>
                <input className="text"type="text" id='contactName'value={firstInput} name="name" onChange={inputChange}></input>
                <h3>Email address:</h3>
                <input className="text"type="text" id='contactEmail'value={secondInput} name="email" onChange={inputChange}></input>
                <h3>Message:</h3>
                <input className="textArea" id='contactMessage'type="textarea" value={thirdInput} name="message" onChange={inputChange}></input><br></br>
                <button className="submitBut">Submit</button>

            </form>
        </div>
    )
}

export default Contact