import React from 'react';

function Projects(props) {
    return (
        <div className='Projects'>
            <h2 className='bodiniFont'>my projects.</h2>

            <div className='project'>
                <h3>project one</h3>
                <span>Live | GitHub</span>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                <img></img>
            </div>
            <div className='project'>
                <h3>project two</h3>
                <span>Live | GitHub</span>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                <img></img>
            </div>
            <div className='project'>
                <h3>project three</h3>
                <span>Live | GitHub</span>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                <img></img>
            </div>
        </div>
    );
}

export default Projects;