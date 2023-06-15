import React from 'react';

function AboutMe(props) {
    return (
        <div className='About'>
            <h2 className='AboutTitle'>About Me</h2>
            <img src={('../../images/Joeyface.jpeg')} alt='This is me.'></img>
            <p>E pluribus unum is a wonderful phrase. It's our problem free philosophy.</p>
        </div>
    )
}
export default AboutMe