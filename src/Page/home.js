import React from 'react';
import About from '../components/About/about';
import Team from '../components/Team/team';
import Vision from '../components/Vision/vision';
import Banner from '../components/Banner/banner';
import Gallery from '../components/Gallery/gallery';
function home() {
  return (
    <div>
        <Banner/>
        <Vision/>
        <About/>
        <Team/>
        <Gallery/>
    </div>
  )
}

export default home