import React from "react";
import Proj1 from '../images/Project1img.png'

const Project = (props)=>{
    return (
        <div>
        <a href='"https://kaylanorris.github.io/morning-java"' className={"project1"} style={{backgroundImage: `url(${Proj1})`}}>
            <div>
                <h3>Morning Java</h3>
                <a href="https://github.com/KaylaNorris/morning-java"><i class="fa-brands fa-github"></i></a>
            </div>
            </a>
        <a href="https://gamereviewsnow.herokuapp.com/" className={"project2"}>
            <div>
                <h3>GameReviewsNow</h3>
                <a href="https://github.com/Alphastranger/Project-2-Team-2"><i class="fa-brands fa-github"></i></a>
                </div>
                </a>
        <a href='https://alphastranger.github.io/Weather-Reporter/' className={"project3"}>
            <div>
                <h3>Weather Reporter</h3>
                <a href="https://github.com/Alphastranger/Weather-Reporter"><i class="fa-brands fa-github"></i></a>
            </div>
            </a>
        <a href='https://alphastranger.github.io/Password-Generator/' className={"project4"}>
        <div>
            <h3>Password Generator</h3>
            <a href="https://github.com/Alphastranger/Password-Generator"><i class="fa-brands fa-github"></i></a>
        </div>
        </a>
        </div>
    )
}
export default Project