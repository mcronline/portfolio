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

  componentDidMount(){
    window.addEventListener('scroll',this.scrollSection)
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
