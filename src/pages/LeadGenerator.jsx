import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react'
import AuroraBackgroundDemo  from "../test";
import {HoverBorderGradientDemo} from "../test3"


const LeadGenerator = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <AuroraBackgroundDemo />
        <HoverBorderGradientDemo />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default LeadGenerator
