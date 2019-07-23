import React from 'react'

import 'semantic-ui-css/semantic.min.css'
import './App.scss'

import data from "./data.js"

import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import { ReactComponent as Background } from './images/bg.svg'

class App extends React.Component  {

  constructor(){
    super()
    this.animeIntroPos = 0; // keep the position of current object been animated
  }

  componentDidMount(){
    window.addEventListener('scroll',this.scrollSection) //trigger each time page rolls

    this.animeIntro(); //start intro animation
  }

  scrollSection = () => {

    const windowTop = window.pageYOffset;  // get the window top position

  }

  animeIntro = () => {

    const animeTime = 0.2 * 1000; // time left to start animate next element
    let animated = false;
    
    this.animeIntroPos++; // add to current element animation position count

    const animeElements = document.querySelectorAll('[data-intro]')
    
    animeElements.forEach(v=>{
      if(Number(v.attributes['data-intro'].value) === this.animeIntroPos){
        v.classList.add('anim-' + v.attributes['data-anime'].value)
        animated = true
      }
    })

    if(animated) setTimeout(this.animeIntro,animeTime)

  }



  render(){
    return (
      <div id="main">
        <Background />
        <div id="scroller">
          <Intro data={data.resume} />
          <Portfolio data={data.portfolio} />
          <Timeline data={data.timeline} />
          <Contact />
        </div>
      </div>
    );
    }
}

export default App;
