import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBaby,faHeart,faTerminal} from '@fortawesome/free-solid-svg-icons'

function Timeline (props){
    return(
        <section id="timeline-section">
            <h1>Timeline</h1>
            <div id="timeline-top">
                <FontAwesomeIcon icon={faBaby} size="2x" className="icon" />
                <div className="year">1978</div>
            </div>
            <div id="timeline">
                <div className="left">
                    <div className="content">
                        <div className="icon-year">
                            <div className="year">1986</div>
                            <FontAwesomeIcon icon={faTerminal} size="2x" className="icon" />
                        </div>
                        <div className="description"><span>Met a MSX computer system of a friend. <br />First contact with code.</span></div>
                    </div>
                </div>                
                <div className="right">
                    <div className="content">
                            <div className="icon-year">
                            <FontAwesomeIcon icon={faHeart} size="2x" className="icon" />
                            <div className="year">1981</div>
                        </div>
                        <div className="description"><span>Won my atari 2600. <br />Start the passion for games.</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline;

