import React from 'react'
import Hero from '../components/hero/Hero'
import Main from '../components/main/Main'
import Section from '../components/section/Section'
import Diverse from '../components/investment/Diverse'
import Video from '../components/Video/Video'
import About from "../components/about/About"
import Footer from '../static/Footer'
const Home = () => {
  return (
    <div>
      <Hero />
      <Section />
      <Main />
      <Diverse/>
      <Video />
      <About />
      <Footer />
    </div>
  )
}

export default Home