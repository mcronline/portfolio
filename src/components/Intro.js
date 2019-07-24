import React from 'react'
import photo from '../images/michel.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faTwitterSquare,faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function Intro (props){

    let animePos = 6;
    const resumeTags = props.data.map(line => {
            animePos++;
            return(<li data-anime="move-left" data-intro={animePos}>{line}</li>)                
        }
    )

    const nav = props.menu.map(menu => <a key={menu.label}>{menu.label}</a>);

    return(
        <section id="intro-section">
            <nav>
                {nav}
            </nav>
            <header data-anime="fadein" data-intro="5">
                <div id="title">
                    <h1>Michel Curti Rozatti Soller</h1>
                    <div id="sub-title">
                        <h2>Full Stack Web Developer</h2>
                        <div id="social-icons">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icons" />
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="icons" />
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icons" />
                            <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" className="icons" />
                        </div>
                    </div>
                </div>
            </header>
            <div id="profile-info">
                <img src={photo} alt="Michel Curti Rozatti Soller" data-anime="move-right" data-intro="6"/>
                <div id="resume">
                    {resumeTags}
                </div>
            </div>
        </section>

    ) 
    
}

export default Intro;

