import React from "react";
import Github from '../images/GithubLogo.png'

const Footer = ()=>{
    return (
    <div className="bottomScreen">
        <a href="https://github.com/Alphastranger" className={"footer"}><i className="fa-brands fa-github fa-2x" alt="Github"></i></a>
        <a href='https://www.linkedin.com/in/joseph-flynn-a024a21b2/'className={"footer"}><i className="fa-brands fa-linkedin fa-2x" alt='LinkedIn'></i></a>
        <button onClick={()=>window.location.href = 'mailto:abjosammag@gmail.com'} className={"footer"}><i className="fa-solid fa-envelope fa-2x"></i></button>
    </div>
    )
}
export default Footer