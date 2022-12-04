import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand" href="#">Navbar</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#about">About me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#resume">Resume</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <br/>
            <About/>
            <br/>
            <Contact/>
        </div>
    )
}