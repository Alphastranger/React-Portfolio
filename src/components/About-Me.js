import React from 'react';
import ProfilePic from '../images/Joeyface.jpeg'
function AboutMe(props) {
    return (
        <div className='About'>
            <h2 className='AboutTitle'>About Me</h2>
            <img src={ProfilePic} alt='This is me.' className='faceImage'></img>
            <p>My name is Joseph Flynn and I am a junior web developer. On this site I have included an About Me section,<br/>a contact page for you to reach out and leave me a message and your relevant contact info, a portfolio with <br/>some of my past projects, and a link to my resume. The last page also includes a list of some of the programming<br/> subjects I am versed in. Any further inquiries can be left at my email, github, or linkedin which are all linked<br/> below.</p>
        </div>
    )
}
export default AboutMe