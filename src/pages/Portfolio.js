import React, { useState } from "react";
import Project from "../components/Project";
import ArtaholicImage from "../assets/artaholics-gallery.jpg"
import ChatoramaImage from "../assets/Chatorama.gif";
import HomrImage from "../assets/homr.png";
import ecommerceBackEnd from "../assets/ecommerce-back-end.png";
import employeeTracker from "../assets/employee-tracker.png";


export default function Portfolio() {
    const [projects, setProjects ] = useState([
        // project 1
        {
            title: "Artaholic",
            tech: "React, React-bootstrap, intro.js",
            image: ArtaholicImage,
            alt: "Artaholic gallery of art pieces",
            deployed: "https://artaholics.herokuapp.com/",
            github: "https://github.com/Dempleon/artaholic",
        },
        // project 2
        {
            title: "Chatorama",
            tech: "Socket.io, Handlebars",
            image: ChatoramaImage,
            alt: "Chatorama Login and enter chatroom",
            deployed: "https://morning-ridge-00973.herokuapp.com/",
            github: "https://github.com/KevinPXu/Chatorama",
        },
        // project 3
        {
            title: "Homr",
            tech: "Jquery, Server Side APIs",
            image: HomrImage,
            alt: "Homepage of Homr",
            deployed: "https://shwethareddy0.github.io/homr/",
            github: "https://github.com/shwethareddy0/homr",
        },
        // project 4
        {
            title: "E-Commerce Back End",
            tech: "Express.js, Sequlize & MySQL",
            image: ecommerceBackEnd,
            alt: "Insomnia with get all categories response",
            deployed: "https://watch.screencastify.com/v/5fcVtETlqynYLnhvIN6s",
            github: "https://github.com/Angellyn218/ecommerce-back-end",
        },
        // project 5
        {
            title: "Employee Tracker",
            tech: "Node.js, Inquirer, MySQL",
            image: employeeTracker,
            alt: "Main menu of employee tracker",
            deployed: "https://watch.screencastify.com/v/uoKtnSGUeJfA9XZpnOYR",
            github: "https://github.com/Angellyn218/employee-tracker",
        },
    ]);

    return (
        <div className="page">
            <h1>Projects</h1>
            <div className="portfolio">
                {projects.map((item, i) => {
                    return (
                        <Project key={i} title={item.title} tech={item.tech} image={item.image} alt={item.alt} deployed={item.deployed} github={item.github} />
                    )
                })}
            </div>
        </div>
    )
}