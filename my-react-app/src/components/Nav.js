import { React, useState } from "react";
import { Link } from 'react-router-dom'
import AboutMe from './About-Me'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'

const Nav = () => {
    const [activePage, setActive] = useState('')
    const [headingHighlights, setHeadings] = useState(['About-Me', 'Portfolio', 'Contact', 'Resume'])
    if (activePage) {
        setActive('active')
    }
    return (
        <nav className={'headings'}>
            <ul>
                <Link to='/'><li>{headingHighlights[0]}</li></Link>

                <Link to='/contact'><li>{headingHighlights[1]}</li></Link>

                <Link to='/portfolio'><li>{headingHighlights[2]}</li></Link>

                <Link to='/resume'><li>{headingHighlights[3]}</li></Link>
            </ul>
        </nav>
    )
}
export default Nav