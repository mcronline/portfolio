import React from 'react'
import photo from '../images/michel.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faTwitterSquare,faGithubSquare} from '@fortawesome/free-brands-svg-icons'

class Intro extends React.Component {

    render(){

        const resumeTags = this.props.data.map(line => <li>{line}</li>)

        return(
            <section id="intro-section">
                <nav>
                    <li>Intro</li>
                    <li>Portfolio</li>
                    <li>Timeline</li>
                    <li>Contact</li>
                </nav>
                <header id="title">
                    <h1>Michel Curti Rozatti Soller</h1>
                    <div id="sub-title">
                        <h2>Full Stack Web Developer</h2>
                        <div id="social-icons">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icons" />
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="icons" />
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icons" />
                        </div>
                    </div>
                </header>
                <div id="profile-info">
                    <img src={photo} alt="Michel Curti Rozatti Soller"/>
                    <div id="resume">
                        {resumeTags}
                    </div>
                </div>
            </section>
        ) 
    }
}

export default Intro;

