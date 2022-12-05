import React from "react";

export default function Project(props) {
    return (
        <div class="card">
            <img src={props.image} class="card-img-top" alt={props.alt}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <a href={props.deployed} class="card-link">Deployed</a>
                <a href={props.github} class="card-link">Github</a>
            </div>
        </div>
    )
}