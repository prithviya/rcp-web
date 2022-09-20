import React from 'react';
import './banner.css';
import Brochure from '../../Assets/brochure.pdf';
import Images from '../../Constant/static';

function banner() {
  return (
    <div>
        <div className="uk-position-relative uk-visible-toggle" tabindex="-1" data-uk-slideshow="animation: push; autoplay: true; finite: false; min-height: 360; max-height: 620">
            <ul className="uk-slideshow-items">
                <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left ">
                        <img className='custom_sect_banner' src={Images.SLIDER_IMG_2} alt="banner_image" data-uk-cover />
                    </div>
                    <div className="uk-position-center uk-position-small uk-text-center uk-light">
                        <h1 className="home-title">
                            <span>Welcome To RCP</span>
                        </h1>
                        <p className="uk-margin-remove text-white">
                        RCP is a symbol of excellence dedicated to inculcating education with <br/>unique standards that prepares competent Physiotherapists for global demands. 
                        </p>
                        <a href={Brochure} download="RCP_Brochure.pdf" rel="noopener noreferrer">
                            <button class="uk-button uk-button-danger uk-margin-top">Download Brochure</button>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img className='custom_sect_banner' src={Images.SLIDER_IMG_1}  alt="banner_image" data-uk-cover />
                    </div>
                    <div className="uk-position-center uk-position-small uk-text-center">
                        <h1 className="home-title">
                            <span>Courses Offered</span>
                        </h1>
                        <a href='https://admissions.rathinamcollege.edu.in/' rel="noopener noreferrer">
                            <button class="uk-button uk-button-primary uk-margin-top">Apply now</button>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left ">
                        <img className='custom_sect_banner' src={Images.SLIDER_IMG} alt="banner_image" data-uk-cover />
                    </div>
                    <div className="uk-position-center uk-position-small uk-text-center uk-light">
                        <h1 className="home-title">
                            <span>Get In Touch With Us</span>
                        </h1>
                        
                        <a href="tel:+918448448909" rel="noopener noreferrer">
                            <button class="uk-button uk-button-danger uk-margin-top">Contact Us</button>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default banner