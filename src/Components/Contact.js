import React from 'react';
import '../styles/App.css';

function Contact(props) {
    return (
        <div className='Contact'>
        <h2 className='bodiniFont'>Let's Talk.</h2>
            <div>
                <ul>
                    <li>linkedin</li>
                    <li>github</li>
                </ul>
                <a href="mailto:mylliejohnson@gmail.com" className='bodiniFont'>mylliejohnson@gmail.com</a>
           
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
</p>
           
            </div>
            <div>
                <form>
                <input type="text" id="fname" name="fname" placeholder="first name"/>
                <input type="text" id="lname" name="lname" placeholder="last name"/>
                <input type="text" id="email" name="email" placeholder="email"/>
                <input type="text" id="subject" name="subject" placeholder="subject"/>
                <textarea placeholder="message:" />

                <button>send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;