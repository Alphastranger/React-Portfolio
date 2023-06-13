import React from "react";
import {Link} from 'react-router-dom'
import AboutMe from './About-Me'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'

const Nav = ()=> {
    const [activePage, setActive] = useState('')
    const [headingHighlights, setHeadings] = useState(['About-Me', 'Portfolio', 'Contact', 'Resume'])
    if (activePage) {
        setActive('active')
    }
return(
    <nav className={'headings'}>
                <ul>
                    <li>
                        <Route path='/' component={AboutMe}>{headingHighlights[0]}</Route></li>
                    <li>
                        <Route path='contact' element={<Contact />}>{headingHighlights[1]}</Route></li>
                    <li>
                        <Route path='portfolio' element={<Portfolio />}>{headingHighlights[2]}</Route></li>
                    <li>
                        <Route path='resume' element={<Resume />}>{headingHighlights[3]}</Route></li>
                </ul>
            </nav>
)
}
export default Nav