import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBaby} from '@fortawesome/free-solid-svg-icons'

function Timeline (props){
    
    const timeline = props.data.map((v,i) => {

        let element;
        let animClass = "";
        const sideClass = (i % 2 === 0 ? "left" : "right")

        if(!v.icon){ // empty register for the last register to be the right side

           element = <div key={v.key} className={sideClass}></div>

        }else{

            let spacing = {}
            if(v.spacing)
                spacing = {paddingTop:v.spacing}
            else
                spacing = {paddingTop:"0px"}

            if(sideClass === 'left')
                animClass = "move-right"
            else
                animClass = "move-left"
           
            element = 
                <div key={v.key} className={sideClass} style={spacing}>
                    <div className="content" data-anime={animClass}>
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

        }
        
        return(element)
    })

    return(
        <section id="timeline-section">
            <h1 data-anime="move-right">Curriculum</h1>
            <div id="timeline-top" data-anime="move-top">
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

