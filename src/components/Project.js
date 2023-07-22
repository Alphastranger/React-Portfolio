import React from "react";
import Proj1 from '../images/Project1img.png'
import Proj2 from '../images/GamesNow.png'
import Proj3 from '../images/WeatherReporter.png'
import Proj4 from '../images/PasswordGenerator.png'

const Project = (props)=>{
    return (
        <div className="projectsPlural">
        <a className="projImg" href={props.url} style={{backgroundImage: `url(${props.image})`, width:'300px', height:'100%', objectFit:'contain', backgroundSize: '100%',
  minHeight:'150px',
  maxHeight: '200px',
  border: 'solid 2px rgb(230,98,27)', minWidth:'150px', maxWidth:'300px', borderRadius:'4px'}}>
            <h3 style={{display:'inline',position: 'relative', top: '150px', color: 'aliceblue', backgroundColor: 'rgb(230,98,27)', borderRadius: '0px 3px 3px 0px', padding: '2px', marginBottom:'205px'}}>{props.title}</h3></a>
            
            <a href={props.github}><i className="fa-brands fa-github" style={{display:'inline',position: 'relative', top: '155px', right: '30px', color: 'rgb(230,98,27)'}}></i></a>
        </div>
    )
}
export default Project