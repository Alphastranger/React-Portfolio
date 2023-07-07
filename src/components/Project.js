import React from "react";
import Proj1 from '../images/Project1img.png'
import Proj2 from '../images/GamesNow.png'
import Proj3 from '../images/WeatherReporter.png'
import Proj4 from '../images/PasswordGenerator.png'

const Project = (props)=>{
    return (
        <div className="projectsPlural">
        <div style={{backgroundImage: `url(${props.image})`, width:'300px', height:'100%', objectFit:'contain', backgroundSize: '100%',
  minHeight:'150px',
  maxHeight: '200px',
  border: 'solid 2px black', minWidth:'150px', maxWidth:'300px'}}>
                <a href={props.url}><h3 style={{display:'inline',position: 'relative', top: '170px', color: 'aliceblue', backgroundColor: 'rgb(39,114,107)', borderRadius: '3px'}}>{props.title}</h3></a>
                <a href={props.github}><i className="fa-brands fa-github" style={{display:'inline',position: 'relative', top: '170px', color: 'rgb(39,114,107)'}}></i></a>
            </div>
        </div>
    )
}
export default Project