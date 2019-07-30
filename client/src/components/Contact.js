import React from 'react'
import familyPhoto from '../images/family.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faTwitterSquare,faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function Contact (props){
    return(
        <section id="contact-section">
            <div id="contact">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <img src={familyPhoto} className="family-img" alt="My Family"/>
            <div className="contact-msg-1">{props.data[0]}</div>
            <div className="contact-msg-2">{props.data[1]}</div>
            <div className="contact-msg-3">{props.data[2]}</div>
            <div className="contact-msg-4">{props.data[3]}</div>
            <div id="contact-icons">
                <FontAwesomeIcon icon={faLinkedin} size="4x" className="icons" />
                <FontAwesomeIcon icon={faTwitterSquare} size="4x" className="icons" />
                <FontAwesomeIcon icon={faGithubSquare} size="4x" className="icons" />
                <FontAwesomeIcon icon={faEnvelopeSquare} size="4x" className="icons" />
            </div>
        </section>
    )
}

export default Contact;

