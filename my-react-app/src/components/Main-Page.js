import React from "react";
import AboutMe from "./About-Me";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Main = () =>{
    const headings =['About-Me', 'Portfolio', 'Contact', 'Resume']
    const renderings = [AboutMe, Portfolio, Contact, Resume]
    // for (let i=0; i<headings.length; i++){
     if (window.location.href.indexOf(headings[0])>-1) {
        return (
            <div>
            <AboutMe/>
            </div>
        )
     } else if (window.location.href.indexOf(headings[1])>-1)  {
        return (
           <div> <Portfolio/></div>
        )
     } else if (window.location.href.indexOf(headings[2])>-1) {
        return (
            <div><Contact/></div>
        )
     } else if (window.location.href.indexOf(headings[3])>-1) {
        return (
           <div> <Resume/></div>
        )
     }
// return (
//     <div>
//         <headings/>
//     </div>
// )
}

export default Main