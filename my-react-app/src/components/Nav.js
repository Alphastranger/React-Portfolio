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
     } else {
        activePage[0]=('active')
     }
}
    return (
        <nav className={'headings'}>
            <ul>
                <Link to='/About-Me'><li className= {activePage[0]}>{headingHighlights[0]}</li></Link>

                <Link to='/contact'><li className= {activePage[1]}>{headingHighlights[1]}</li></Link>

                <Link to='/portfolio'><li className= {activePage[2]}>{headingHighlights[2]}</li></Link>

                <Link to='/resume'><li className= {activePage[3]}>{headingHighlights[3]}</li></Link>
            </ul>
        </nav>
    )
}
export default Nav