import React from 'react'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../homePageComponents/Services'
import Project from '../components/Project'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <>
    <Hero />
    <Services />
    <Project />
    <Contact />
    <Footer />
    </>
  )
}

export default Homepage