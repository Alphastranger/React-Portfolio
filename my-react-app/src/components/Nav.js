import { React, useState } from "react";
import { Link } from 'react-router-dom'
import AboutMe from './About-Me'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'

const Nav = () => {
    const [activePage, setActive] = useState(['','','',''])
    const headingHighlights =['About-Me', 'contact', 'portfolio', 'resume']
    for (let i=0; i<headingHighlights.length; i++){
     if (window.location.href.indexOf(headingHighlights[i])>-1) {
        activePage[i]=('active')
     }
}
    return (
        <nav className={'headings'}>
            <ul>
                <Link to='/About-Me'><li className= {`${activePage[0]} navLinks`}>About Me</li></Link>

                <Link to='/contact'><li className= {`${activePage[1]} navLinks`}>Contact</li></Link>

                <Link to='/portfolio'><li className= {`${activePage[2]} navLinks`}>Portfolio</li></Link>

                <Link to='/resume'><li className= {`${activePage[3]} navLinks`}>Resume</li></Link>
            </ul>
        </nav>
    )
}
export default Nav