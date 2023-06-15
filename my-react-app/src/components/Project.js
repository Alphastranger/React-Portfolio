import React from "react";
import Proj1 from '../images/Project1img.png'
import Proj2 from '../images/GamesNow.png'
import Proj3 from '../images/WeatherReporter.png'
import Proj4 from '../images/PasswordGenerator.png'

const Project = (props)=>{
    return (
        <div className="projectsPlural">
        <div  className={"project1"} style={{backgroundImage: `url(${Proj1})`, width:'100%', height:'100%', objectFit:'contain', backgroundSize: '100%',
  minHeight:'150px',
  maxHeight: '200px',
  border: 'solid 2px black', minWidth:'150px', maxWidth:'300px'}}>
                <a href='"https://kaylanorris.github.io/morning-java"'><h3 style={{display:'inline',position: 'relative', top: '170px', color: 'aliceblue', backgroundColor: 'rgb(39,114,107)', borderRadius: '3px'}}>Morning Java</h3></a>
                <a href="https://github.com/KaylaNorris/morning-java"><i className="fa-brands fa-github" style={{display:'inline',position: 'relative', top: '170px', color: 'rgb(39,114,107)'}}></i></a>
            </div>
        <div  className={"project2"} style={{backgroundImage: `url(${Proj2})`,width:'100%', height:'100%', objectFit:'contain', backgroundSize: '100%',
  minHeight:'150px',
  maxHeight: '200px',
  border: 'solid 2px black', minWidth:'150px', maxWidth:'300px'}}>
                <a href="https://gamereviewsnow.herokuapp.com/"><h3 style={{display:'inline',position: 'relative', top: '170px', color: 'aliceblue', backgroundColor: 'rgb(39,114,107)', borderRadius: '3px'}}>GameReviewsNow</h3></a>
                <a href="https://github.com/Alphastranger/Project-2-Team-2"><i className="fa-brands fa-github" style={{display:'inline',position: 'relative', top: '170px', color: 'rgb(39,114,107)'}}></i></a>
                </div>
        <div  className={"project3"} style={{backgroundImage: `url(${Proj3})`, width:'100%', height:'100%', objectFit:'contain', backgroundSize: '100%',
  minHeight:'150px',
  maxHeight: '200px',
  border: 'solid 2px black', minWidth:'150px', maxWidth:'300px'}}>
                <a href='https://alphastranger.github.io/Weather-Reporter/'><h3 style={{display:'inline',position: 'relative', top: '170px', color: 'aliceblue', backgroundColor: 'rgb(39,114,107)', borderRadius: '3px'}}>Weather Reporter</h3></a>
                <a href="https://github.com/Alphastranger/Weather-Reporter"><i className="fa-brands fa-github" style={{display:'inline',position: 'relative', top: '170px', color: 'rgb(39,114,107)'}}></i></a>
            </div>
        <div className={"project4"} style={{backgroundImage: `url(${Proj4})`, width:'100%', height:'100%', objectFit:'contain', backgroundSize: '100%',
  minHeight:'150px',
  maxHeight: '200px',
  border: 'solid 2px black', minWidth:'150px', maxWidth:'300px'}}>
            <a href='https://alphastranger.github.io/Password-Generator/'><h3 style={{display:'inline',position: 'relative', top: '170px', color: 'aliceblue', backgroundColor: 'rgb(39,114,107)', borderRadius: '3px'}}>Password Generator</h3></a>
            <a href="https://github.com/Alphastranger/Password-Generator"><i className="fa-brands fa-github" style={{display:'inline',position: 'relative', top: '170px', color: 'rgb(39,114,107)'}}></i></a>
        </div>
        </div>
    )
}
export default Project