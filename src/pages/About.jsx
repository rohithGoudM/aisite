import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Roadmap from "../components/Roadmap";
import React from 'react'

const About = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default About

