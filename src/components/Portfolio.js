import React from 'react'

const images = {};

function Portfolio (props){

    const portfolioItems = props.data.map((v) => {
        return (
            <div key={v.key} className="portfolio-item">
                <img src={v.img} className="portfolio-image" />
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

