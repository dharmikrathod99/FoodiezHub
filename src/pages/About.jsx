import React from 'react'
import Nav from '../components/HomeComponents/Nav'
import AboutHero from '../components/About/AboutHero'
import Threecombo from '../components/HomeComponents/Threecombo'
import Aboutus from '../components/HomeComponents/Aboutus'
import Title from '../components/HomeComponents/Title'
import Hero from '../components/HomeComponents/Hero'
import Chefe from '../components/About/Chefe'
import Download from '../components/About/Download'
import Footer from '../components/HomeComponents/Footer'

function About() {
    return (
        <>
            <Nav/>
            <AboutHero/>
            <Threecombo/>
            <Aboutus/>
            <Title/>
            <Hero/>
            <Chefe/>
            <Download/>
            <Footer/>
        </>
    )
}

export default About
