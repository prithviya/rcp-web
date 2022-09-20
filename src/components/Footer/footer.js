import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className='uk-section uk-section-secondary'>
        <div className='uk-container'>
            <div className="uk-grid-match uk-child-width-1-4@m" data-uk-grid>
                <div>
                    <h4>
                        About Rathinam
                    </h4>
                    <span className="line-1 uk-margin-small"></span>
                    <p className='text-white'>
                        Rathinam, as a premium Institution is known for its unique quality of Education. Rathinam Group is the only institute that brings education, information technology (IT) development, and infrastructure development under one roof.
                    </p>
                </div>
                <div>
                    <h4>
                        Quick Link
                    </h4>
                    <span className="line-1 uk-margin-remove"></span>
                    <Link to="abt" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}  className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/FFFFFF/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-20.png"/>
                        About
                    </Link>
                    <Link to="academics" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}  className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/FFFFFF/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-20.png"/>
                        Academics
                    </Link>
                    <Link to="facility" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}  className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/FFFFFF/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-20.png"/>
                        Infrastructure
                    </Link>
                    <Link to="admission" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}  className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/FFFFFF/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-20.png"/>
                        Admission
                    </Link>
                    <Link to="events" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}  className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/FFFFFF/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-20.png"/>
                        Event
                    </Link>
                </div>
                <div>
                    <h4>
                        Contact Us
                    </h4>
                    <span className="line-1 uk-margin-remove"></span>
                    <a href="tel:+918448448909" rel="noreferrer"  className='text-white' style={{textDecoration:'none'}}>
                    <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/ios-filled/30/FFFFFF/callback.png"/>
                        +91 84484 48909
                    </a>
                    <a href="mailto:admission@rathinam.in" rel="noreferrer"  className='text-white' style={{textDecoration:'none'}}>
                    <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/sf-black-filled/30/FFFFFF/new-post.png"/>
                        admission@rathinam.in
                    </a>
                    <a href="https://goo.gl/maps/RnpwCwXaWqgnt7N67" target='_blank' rel="noreferrer" className='text-white' style={{textDecoration:'none'}}>
                    <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/ios/30/FFFFFF/order-delivered.png"/>
                    Rathinam Techzone Campus, Pollachi Road, Eachanari, Coimbatore, 
                    </a>
                </div>
                <div>
                    <h4>
                        Media Link
                    </h4>
                    <span className="line-1 uk-margin-remove"></span>
                    <a href="https://twitter.com/rathinamgroups/" target='_blank' rel="noreferrer" className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/wired/30/FFFFFF/twitter-circled.png"/>
                        Twitter
                    </a>
                    <a href="https://www.facebook.com/rathinamcollege/" target='_blank' rel="noreferrer" className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/wired/30/FFFFFF/facebook-new.png"/>
                        FaceBook
                    </a>
                    <a href="https://www.instagram.com/rathinam_college/" target='_blank' rel="noreferrer" className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/wired/30/FFFFFF/instagram--v1.png"/>
                    Instagram
                    </a>
                    <a href="https://www.youtube.com/user/RathinamCollege/" target='_blank' rel="noreferrer" className='text-white' style={{textDecoration:'none'}}>
                        <img className='uk-margin-small-right' alt='footer_link' src="https://img.icons8.com/wired/30/FFFFFF/youtube-play.png"/>
                    YouTube
                    </a>
                </div>
            </div>
            <button
            onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            style={{
            position: 'fixed',
            padding: '9px 9px',
            fontSize: '2rem !important',
            bottom: '50px',
            right: '50px',
            background: 'linear-gradient(135deg,#007ccf 42%,  #3bb18e 92%)',
            color: 'rgb(194 24 76)',
            textAlign: 'center',
            zIndex: '9999',
            border: 'none',
            borderRadius: '5px',
            }}
        >
            <img src="https://img.icons8.com/ios-filled/25/FFFFFF/login-rounded-up.png" alt='top'/>
        </button>
        </div>
    </div>
  )
}

export default footer