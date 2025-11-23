import React from 'react';

const About = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-3">About This To-Do Application</h2>

            <p>
                This To-Do List application is a simple, clean, and efficient task manager
                built using <strong>React.js</strong>. The purpose of this project is to help users
                organize daily tasks, stay productive, and manage their workflow effectively.
            </p>

            <h4> Key Features</h4>
            <ul>
                <li>Add new tasks easily</li>
                <li>Delete completed tasks</li>
                <li>Organized list display</li>
                <li>React Router based navigation</li>
            </ul>

            <h4> Technologies Used</h4>
            <ul>
                <li>React.js (Functional Components)</li>
                <li>useState Hook for state management</li>
                <li>React Router v6 for navigation</li>
                <li>Bootstrap for UI styling</li>
            </ul>

            <p className="mt-3">
                This project was built to strengthen React concepts such as component
                structuring, state management, props, routing, and controlled forms.
                It serves as both a practical utility and a hands-on learning experience.
            </p>

            <p className="mt-4">
                <strong>Thank you for exploring the application!</strong>
            </p>
        </div>
    );
};

export default About;
