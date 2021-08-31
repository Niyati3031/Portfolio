import React from 'react'
import SocialContact from '../../common/social-contact';
import './about.css';
function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Every once in a while, a new technology,<br /> an old proglem, and a big idea turn into an innovation.<br />I want to create that innovation.<br />
                    Hello There 👋, I am <span className='info-name'>NIYATI SONI</span>.<br /> I am very passionate about tech and keep looking for great opportunities.

                </div>
                <div className='about-photo'>
                   <img src={require('../../../assets/Coding.png').default} 
                   className='coding'/>
                </div>
            </div>
            <SocialContact />
        </div>
        
    )
}

export default About
