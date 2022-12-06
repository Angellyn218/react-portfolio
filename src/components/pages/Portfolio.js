import React, { useState } from "react";
import Project from "../Project";
import ChatoramaImage from "../../assets/Chatorama.gif";
import techBlogImage from "../../assets/tech-blog.png";
import ecommerceBackEnd from "../../assets/ecommerce-back-end.png";
import employeeTracker from "../../assets/employee-tracker.png";
import noteTaker from "../../assets/note-taker.png";

export default function Portfolio() {
    const [projects, setProjects ] = useState([
        // project 1
        {
            title: "Chatorama",
            tech: "Socket.io, Heroku",
            image: ChatoramaImage,
            alt: "Chatorama Login and enter chatroom",
            deployed: "https://morning-ridge-00973.herokuapp.com/",
            github: "https://github.com/KevinPXu/Chatorama",
        },
        // project 2
        {
            title: "Tech Blog",
            tech: "Squelize (ORM), Handlebars",
            image: techBlogImage,
            alt: "Homepage of tech blog",
            deployed: "https://post-on-tech-blog.herokuapp.com",
            github: "https://github.com/Angellyn218/tech-blog",
        },
        // project 3
        {
            title: "E-Commerce Back End",
            tech: "Express.js, Sequlize & MySQL",
            image: ecommerceBackEnd,
            alt: "Insomnia with get all categories response",
            deployed: "https://watch.screencastify.com/v/5fcVtETlqynYLnhvIN6s",
            github: "https://github.com/Angellyn218/ecommerce-back-end",
        },
        // project 4
        {
            title: "Employee Tracker",
            tech: "Node.js, Inquirer, MySQL",
            image: employeeTracker,
            alt: "Main menu of employee tracker",
            deployed: "https://watch.screencastify.com/v/uoKtnSGUeJfA9XZpnOYR",
            github: "https://github.com/Angellyn218/employee-tracker",
        },
        // project 5
        {
            title: "Note Taker",
            tech: "Express.js, Node.js, Heroku",
            image: noteTaker,
            alt: "Homepage of Note Taker",
            deployed: "https://we-take-notes.herokuapp.com",
            github: "https://github.com/Angellyn218/note-taker",
        },
    ]);

    return (
        <div className="page">
            <h1>Projects</h1>
            {projects.map((item, i) => {
                return (
                    <Project key={i} title={item.title} tech={item.tech} image={item.image} alt={item.alt} deployed={item.deployed} github={item.github} />
                )
            })}
        </div>
    )
}