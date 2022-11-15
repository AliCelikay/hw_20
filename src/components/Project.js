import React from 'react';
import '../css/project.css';

export default function Project(props) {
    return (
        <div className='project-container'>
            <div className="card project-card mb-5" style={{ backgroundImage: `url(${props.image})` }}>
                <div className="card-body overlay">
                    <span>
                        <h5 className="card-title text-body">{props.name}</h5>
                        <p className="card-title text-body">{props.description}</p>
                        <a href={props.link} target="_blank" className="card-link text-body">{props.liveLink}</a>
                        <a href={props.github} style={{opacity: 1}} target="_blank" className="card-link text-body">{props.gitHubLink}</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
