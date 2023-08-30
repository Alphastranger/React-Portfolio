import React from "react";
import Project from './Project'
import Proj1 from '../images/Project1img.png'
import Proj2 from '../images/GamesNow.png'
import Proj3 from '../images/WeatherReporter.png'
import Proj4 from '../images/PasswordGenerator.png'
import Proj5 from '../images/Ecommerce.png'

const Portfolio = () => {
    return (
        <div>
    <h2 className="portH2">Portfolio</h2>
        <div className={"portfolioPics"}>
            <Project url="https://kaylanorris.github.io/morning-java" github="https://github.com/KaylaNorris/morning-java" image={Proj1} title='Morning Java' description='An all in one website that tracks news, the weather, and the stock market using a third party API and JavaScript.'/>
            <Project url="https://gamereviewsnow.herokuapp.com/" github="https://github.com/Alphastranger/Project-2-Team-2" image={Proj2} title='GameReviewsNow' description='Website for people to post reviews for upcoming and current video games using an SQL database.'/>
            <Project url='https://alphastranger.github.io/Weather-Reporter/' github="https://github.com/Alphastranger/Weather-Reporter" image={Proj3} title='Weather Reporter' description='Website designed to track weather using a third party weather API.'/>
            <Project url='https://alphastranger.github.io/Password-Generator/' github="https://github.com/Alphastranger/Password-Generator" image={Proj4} title='Password Generator' description='A random password generator website using JavaScript.'/>
            <Project url='https://lit-earth-19040-5018388296c4.herokuapp.com/ ' github="https://github.com/djamesclark/Coding-Library" image= {Proj5} title='Ecommerce Site' description='An ecommerce website trading specifically in computer science texts which utilizes graphql, Stripe, and JWT.'/>
        </div>
        </div>
    )
}

export default Portfolio