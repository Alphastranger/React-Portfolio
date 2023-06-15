import React from "react";
import Proj1 from '../images/Project1img.png'
import Proj2 from '../images/GamesNow.png'
import Proj3 from '../images/WeatherReporter.png'
import Proj4 from '../images/PasswordGenerator.png'

const Project = (props)=>{
    return (
        <div>
        <div  className={"project1"} style={{backgroundImage: `url(${Proj1})`, width:'100%', height:'100%'}}>
                <a href='"https://kaylanorris.github.io/morning-java"'><h3>Morning Java</h3></a>
                <a href="https://github.com/KaylaNorris/morning-java"><i className="fa-brands fa-github"></i></a>
            </div>
        <div  className={"project2"} style={{backgroundImage: `url(${Proj2})`, width:'100%', height:'100%'}}>
                <a href="https://gamereviewsnow.herokuapp.com/"><h3>GameReviewsNow</h3></a>
                <a href="https://github.com/Alphastranger/Project-2-Team-2"><i className="fa-brands fa-github"></i></a>
                </div>
        <div  className={"project3"} style={{backgroundImage: `url(${Proj3})`, width:'100%', height:'100%'}}>
                <a href='https://alphastranger.github.io/Weather-Reporter/'><h3>Weather Reporter</h3></a>
                <a href="https://github.com/Alphastranger/Weather-Reporter"><i className="fa-brands fa-github"></i></a>
            </div>
        <div className={"project4"} style={{backgroundImage: `url(${Proj4})`, width:'100%', height:'100%'}}>
            <a href='https://alphastranger.github.io/Password-Generator/'><h3>Password Generator</h3></a>
            <a href="https://github.com/Alphastranger/Password-Generator"><i className="fa-brands fa-github"></i></a>
        </div>
        </div>
    )
}
export default Project