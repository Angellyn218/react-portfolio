import React from "react";
import myResume from "../assets/Angel-Cervantes-Resume.pdf"

export default function Resume() {
    return(
        <div className="page">
            <h1>Resume</h1>
            <h3>Front End</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>DOM Manipulation</li>
                <li>React</li>
            </ul>
            <h3>Back End</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Java</li>
            </ul>
            <a href={myResume} download="AngelCervantesResume">Click to download my resume</a>
        </div>
    )
}