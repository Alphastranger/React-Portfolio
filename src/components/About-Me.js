import React from 'react';
import ProfilePic from '../images/Joeyface.jpeg'
function AboutMe(props) {
    return (
        <div className='About'>
            <h2 className='AboutTitle'>About Me</h2>
            <img src={ProfilePic} alt='This is me.' className='faceImage'></img>
            <p>My name is Joseph Flynn and I am a junior web developer. I have both a bachelor's in English from the Ohio State University, as well as certification from the Ohio State Coding Bootcamp. During my training in the bootcamp I learned the use of both front end and back end skills which are listed in the resume tab.<br></br> On this site I have included a contact page for you to reach out and leave me a message and your relevant contact info, a portfolio with some of my past projects, and a link to my resume. The last page also includes a list of some of the programming subjects I am versed in. Any further inquiries can be left at my email, abjosammag@gmail.com, my github, or linkedin all of which are linked  in the icons below.</p>
        </div>
    )
}
export default AboutMe