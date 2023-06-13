import {React, useState} from "react";

const Contact = ()=>{
    const [firstInput, setfirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('')
    const [thirdInput, setThirdInput] = useState('')
    const formSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem('Name', firstInput)
        localStorage.setItem('Email', secondInput)
        localStorage.setItem('Message', thirdInput)
        setfirstInput=('')
        setSecondInput=('')
        setThirdInput=('')
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
        <div>
            <h2>Contact</h2>
            <form className='contactForm' onSubmit={formSubmit}>
                <h3>Name:</h3>
                <input type="text" value={firstInput} name="name" onChange={inputChange}></input>
                <h3>Email address:</h3>
                <input type="text" value={secondInput} name="email" onChange={inputChange}></input>
                <h3>Message:</h3>
                <input type="textarea" value={thirdInput} name="message" onChange={inputChange}></input>
                <button className="submitBut">Submit</button>

            </form>
        </div>
    )
}

export default Contact