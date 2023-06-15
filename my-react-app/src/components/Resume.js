import React from "react";

const Resume = ()=>{
    return (
        <div className={'resumeParent'}>
            <h2>Resume</h2>
            <h3>Download My <a href='https://docs.google.com/document/d/17XU9VmlgqIZFgggzvm3WApcD0VohnGk6oDSn3n8T0wA/edit?usp=sharing'>Resume</a></h3>
            <h3>List of Skills:</h3>
            <div className="resume">
                <h3>Front End</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Web APIs</li>
                    <li>JQUERY</li>
                    <li>Responsive Design</li>
                    <li>Bootstrap</li>
                    </ul>
                    <h3>Back End</h3>
                    <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>Sequelize</li>
                    <li>Handlebars</li>
                    <li>MongoDB</li>
                    <li>PWAs</li>
                    <li>React</li>
                </ul>
            </div>
        </div>
    )
}
export default Resume