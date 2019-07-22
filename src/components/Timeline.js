import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBaby} from '@fortawesome/free-solid-svg-icons'

function Timeline (props){
    
    const timeline = props.data.map((v,i) => {

        const sideClass = (i % 2 === 0 ? "left" : "right")
        let spacing = ""
        if(v.padding)
            spacing = {paddingTop:v.padding}
        else
            spacing = {paddingTop:"0px"}

        return(
            <div key={v.key} className={sideClass} style={spacing}>
                <div className="content">
                    <div className="icon-year">
                        <div className="year">{v.year}</div>
                        {v.icon}
                    </div>
                    <div className="description">
                        <div className="description-line-1">{v.description1}</div>
                        <div className="description-line-2">{v.description2}</div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <section id="timeline-section">
            <h1>Timeline</h1>
            <div id="timeline-top">
                <FontAwesomeIcon icon={faBaby} size="2x" className="icon" />
                <div className="year">1978</div>
            </div>
            <div id="timeline">
                {timeline}
            </div>
        </section>
    )
}

export default Timeline;

