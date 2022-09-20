import React from 'react';
import About from '../components/About/about';
import Team from '../components/Team/team';
import Vision from '../components/Vision/vision';
import Banner from '../components/Banner/banner';
import Campus from '../components/Campus/campus';
import Brochure from '../components/Brouchure/bro';
function home() {
  return (
    <div>
        <Banner/>
        <Vision/>
        <About/>
        <Team/>
        <Campus/>
        <Brochure/>
    </div>
  )
}

export default home