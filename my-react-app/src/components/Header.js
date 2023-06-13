import React, { useState } from 'react';
import AboutMe from './About-Me'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Nav from './Nav'

const Header = (props) => {
    return (
        <div className={'header'}>
            <div>Joseph Flynn</div>
            <Nav/>
        </div>
    )
}

export default Header