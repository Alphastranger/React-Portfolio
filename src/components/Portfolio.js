import React from "react";
import Project from './Project'
import Proj1 from '../images/Project1img.png'
import Proj2 from '../images/GamesNow.png'
import Proj3 from '../images/WeatherReporter.png'
import Proj4 from '../images/PasswordGenerator.png'

const Portfolio = () => {
    return (
        <div className={"portfolioPics"}>
            <Project url="https://kaylanorris.github.io/morning-java" github="https://github.com/KaylaNorris/morning-java" image={Proj1} title='Morning Java'/>
            <Project url="https://gamereviewsnow.herokuapp.com/" github="https://github.com/Alphastranger/Project-2-Team-2" image={Proj2} title='GameReviewsNow'/>
            <Project url='https://alphastranger.github.io/Weather-Reporter/' github="https://github.com/Alphastranger/Weather-Reporter" image={Proj3} title='Weather Reporter'/>
            <Project url='https://alphastranger.github.io/Password-Generator/' github="https://github.com/Alphastranger/Password-Generator" image={Proj4} title='Password Generator'/>
        </div>
    )
}

export default Portfolio