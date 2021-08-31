import React from 'react'
import SocialContact from '../../common/social-contact';
import Separator from '../../common/social-contact/separator';
import './contact.css';
function Contact() {
    return (
        <div className='contact'>
            <Separator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocialContact />
                </div>
            </div>
        </div>
    )
}

export default Contact
