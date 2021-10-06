import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Profile.css'

export default function Profile(props) {
    const {name, image, country, age, skills} = props.person;
    return (
        <Card body>
            <img src={image} alt="profile"/>
            <Card.Title className="mt-3">
                {name}
            </Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
                Age: <strong>{age}</strong>
            </Card.Subtitle>

            <Card.Subtitle className="mb-2 text-muted">
                Country: <strong>{country}</strong>
            </Card.Subtitle>

            <Card.Subtitle className="mb-2 text-muted">
                Skills:
            </Card.Subtitle>
            <ul className="card-subtitle mb-2 text-muted">
            {
                skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill}</strong>
                    </li>
                ))
            }
            </ul>
        </Card>
    )
}