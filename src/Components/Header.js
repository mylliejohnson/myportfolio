import React from 'react';
import '../styles/App.css'

function Header(props) {
    return (
        <div className='Header'>
           <span className='bodiniFont' id="mj">Mj.</span>

           <div>
               <ul>
                   <li>Home</li>
                   <li>Projects</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul>
           </div>
        </div>
    );
}

export default Header;