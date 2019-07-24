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

    this.animeElements = document.querySelectorAll('[data-anime]')
    window.addEventListener('scroll',this.scrollSection) //trigger each time page rolls

    this.animeIntro(); //start intro animation
  }

  scrollSection = () => {

    const triggerTop = window.pageYOffset + ((window.innerHeight * 3) / 4);  // get the window top position
    this.animeElements.forEach(el => {
      
      if(triggerTop > el.offsetTop){
        el.classList.add('anime-' + el.attributes['data-anime'].value)
      }
    })

    const menu = document.getElementById("hidden-nav");
    
    if(window.pageYOffset > 100){ 
      menu.classList.add('show-menu');
    }else{
      menu.classList.remove('show-menu');
    }

  }

  animeIntro = () => {

    const animeTime = 0.2 * 1000; // time to start animate next element, must be the same as the transition css property of [data-anime]
    let animated = false;
    
    this.animeIntroPos++; // add to current element animation position count

    const animeElements = document.querySelectorAll('[data-intro]')
    
    animeElements.forEach(v=>{
      if(Number(v.attributes['data-intro'].value) === this.animeIntroPos){
        v.classList.add('anime-' + v.attributes['data-anime'].value)
        animated = true
      }
    })

    if(animated) setTimeout(this.animeIntro,animeTime)

  }



  render(){

    const hiddenNav = data.menu.map(menu => <a key={menu.label}>{menu.label}</a>);

    return (
      <div id="main">
        <Background />
        <nav id="hidden-nav"><ul>{hiddenNav}</ul></nav>
        <div id="scroller">
          <Intro data={data.resume} menu={data.menu} />
          <Portfolio data={data.portfolio} />
          <Timeline data={data.timeline} />
          <Contact data={data.contact} />
        </div>
      </div>
    );
    }
}

export default App;
