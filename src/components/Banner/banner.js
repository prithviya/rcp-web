import React from 'react';
import './banner.css'

function banner() {
  return (
    <div>
        <div className="uk-position-relative uk-visible-toggle" tabindex="-1" data-uk-slideshow="animation: push; autoplay: true; finite: false; min-height: 360; max-height: 620">
            <ul className="uk-slideshow-items">
                <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left ">
                        <img className='custom_sect_banner' src="https://yorkshirekneeclinic.com/wp-content/uploads/2020/08/Physiotherapy-phisiotherapist-knee-injury-recovery-treatment-900px.jpg" alt="banner_image" data-uk-cover />
                    </div>
                    <div className="uk-position-center uk-position-small uk-text-center uk-light">
                        <h1 className="home-title">
                            <span>Welcome To Rathinam College</span>
                            <span>Of Physiotherapy</span>
                        </h1>
                        <p className="uk-margin-remove text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>
                <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img className='custom_sect_banner' src="https://media.istockphoto.com/photos/senior-woman-with-trainer-exercising-at-home-picture-id1296176738?b=1&k=20&m=1296176738&s=170667a&w=0&h=tN4Qc2YMibVToqk0d7AEQqfXxTvqXTVgNbbsh1l337s=" alt="banner_image" data-uk-cover />
                    </div>
                    <div className="uk-position-center uk-position-small uk-text-center uk-light">
                        <h1 className="home-title">
                            <span>Welcome To Rathinam College</span>
                            <span>Of Physiotherapy</span>
                        </h1>
                        <p className="uk-margin-remove text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default banner