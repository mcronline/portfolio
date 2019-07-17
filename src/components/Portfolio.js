import React from 'react'
import { Modal, Header } from "semantic-ui-react"

const images = {};

function Portfolio (props){

    const portfolioItems = props.data.map((v) => {
        return (
            <div key={v.key} className="portfolio-item">
                <Modal trigger={<img src={v.thumb} className="portfolio-image" />} >
                    <Header content={v.title} subheader={v.description + ". Skills: " + v.skills}></Header>
                    <Modal.Content>
                        Just testing
                    </Modal.Content>
                </Modal>
                <div className="portfolio-item-data">
                    <div className="portfolio-item-title">{v.title}</div>
                    <div className="portfolio-item-skills">{v.skills}</div>
                    <div className="portfolio-item-description">{v.description}</div>
                </div>
            </div>
        )
    })

    return(
        <section id="portfolio-section">
            <h1>Portfolio</h1>
            <div id="portfolio-items">
                {portfolioItems}
            </div>
            
        </section>
    )
}

export default Portfolio

