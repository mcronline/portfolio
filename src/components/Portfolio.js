import React from 'react'
import { Modal, Header } from "semantic-ui-react"


function Portfolio (props){

    const portfolioItems = props.data.map((v) => {

        const item = <div className="portfolio-item">
                        <img alt={v.title + " thumb image"} src={v.thumb} className="portfolio-thumb" />
                        <div className="portfolio-item-data">
                            <div className="portfolio-item-title">{v.title}</div>
                            <div className="portfolio-item-skills">{v.skills}</div>
                            <div className="portfolio-item-description">{v.description}</div>
                        </div>
                    </div>
        
        const imgs = v.imgs.map(value => <img className="portfolio-image" src={value} alt={v.title + " image"} />)
        
        return (
            <Modal key={v.key} trigger={item} closeIcon >
                \<Header content={v.title} subheader={v.description + ". Skills: " + v.skills}></Header>
                <Modal.Content scrolling>
                    <div className="portfolio-images">
                        {imgs}                        
                    </div>
                </Modal.Content>
            </Modal>
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

