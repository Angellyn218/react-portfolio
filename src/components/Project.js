import React from "react";

export default function Project(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.tech}</p>
                <a href={props.deployed} className="card-link">Deployed</a>
                <a href={props.github} className="card-link">Github</a>
            </div>
        </div>
    )
}