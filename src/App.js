import React from 'react'
import './App.scss'

import data from "./data.json"

import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

class App extends React.Component  {

  componentDidMount(){
    window.addEventListener('scroll',this.scrollSection)
  }

  scrollSection(event){

  }

  render(){
    return (
      <div>
        <Intro data={data.resume} />
        <Portfolio />
        <Timeline />
        <Contact />
      </div>
    );
    }
}

export default App;
