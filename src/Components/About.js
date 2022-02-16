import React from 'react';
import '../styles/App.css';


function About(props) {

    const skills = ["Html && CSS", "Bootstrap", "JavaScript", "Git", "React.js", "Figma", "RESTful APIs", "Adobe Creative Cloud", "Responsive Web Design"]


    let skillMap = skills.map((skill) => {
        return (
            <li>{skill}</li>
        )
    })

    return (
        <div className="About">
            <p className='bodiniFont'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
            <code>hello world</code>

            <div id="skills">
                <h2 className='bodiniFont'>Skills.</h2>
                <ul>
                    {skillMap}
                </ul>
            </div>
        </div>
    );
}

export default About;