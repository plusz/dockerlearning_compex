import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <p>This project was created as a part of Udemy Docker/Kubernetes training</p>
            <p>Environment:</p>
            <ul>
                <p>- Docker</p>
                <p>- Travis CI</p>
                <p>- AWS Elastic Beanstalk</p>
                <p>- Express</p>
                <p>- Nginx</p>
                <p>- Github</p>
                <p>- Postgress</p>
                <p>- Redis</p>
                <p>- Bootstrap</p>
            </ul>
            <p>Languages:</p>
            <ul>
                <p>- React</p>
            </ul>            
            <p><a href="https://github.com/plusz/dockerlearning_compex">See repository in github</a></p>
            <Link to="/">Go to homepage</Link>
        </div>
    );
};