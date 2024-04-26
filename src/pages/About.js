import React from "react";
import ProfilePicture from "../assets/Profile-picture.jpg"

export default function About() {
    return (
        <div className="page">
            <h1>About me</h1> 
            <img src={ProfilePicture} className="profile" alt="profile" />
            <p>
                Angel Cervantes is a junior at California State University Fullerton. She was born and raised in the San Francisco Bay Area. She earned her diploma at “Waldorf School of the Peninsula,” graduating in 2020, 
                and started her studies at the “University of British Columbia” that same year. After realizing her love of web development, she took a year of school to focus 
                on her passion for it. She spent the year taking a web development bootcamp with the UC Berkeley Extension Program and taking the GEs needed to transfer to a California College. 
                She successfully transferred to California State University, Fullerton in Fall 2023. 
                <br/>
                <br/>
                In addition to coding, she loves to dance. She has danced Hawaiian Hula Dance from the ages of 4 to 18. Starting at 8, she participated in numerous Hula 
                competitions alongside her cohorts, winning on multiple occasions. Another style of dancing that she has also studied is hip hop. She started in high school as 
                a sophomore. She would join a local group called “Krazy8”, a hip hop competition group, in her senior year. She moved into “Str8jacket”, the adult version of 
                “Krazy8”, a year later. She has been dancing with them since returning to the Bay Area.
            </p>
        </div>
    )
}