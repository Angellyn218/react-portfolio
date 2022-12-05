import React, { useState } from "react";
import Project from "../Project";

export default function Portfolio() {
    const [projects, setProjects ] = useState([
        // project 1
        {
            title: "",
            description: "",
            image: "#",
            alt: "",
            deployed: "#",
            github: "#",
        },
        // project 2
        {
            title: "",
            description: "",
            image: "#",
            alt: "",
            deployed: "#",
            github: "#",
        },
        // project 3
        {
            title: "",
            description: "",
            image: "#",
            alt: "",
            deployed: "#",
            github: "#",
        },
        // project 4
        {
            title: "",
            description: "",
            image: "#",
            alt: "",
            deployed: "#",
            github: "#",
        },
        // project 5
        {
            title: "",
            description: "",
            image: "#",
            alt: "",
            deployed: "#",
            github: "#",
        },
    ]);

    return (
        <div className="page">
            <h1>Projects</h1>
            {projects.map((item) => {
                return (
                    <Project title={item.title} description={item.description} image={item.image} alt={item.alt} deployed={item.deployed} github={item.github} />
                )
            })}
        </div>
    )
}