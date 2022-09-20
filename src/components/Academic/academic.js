import React from 'react';
import Images from '../../Constant/static';

function academic() {
  return (
    <div>
        <div>
            <div className="uk-background-contain uk-background-muted custom_banner_section uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle">
                <h1>Academic Details</h1>
            </div>
        </div>
        <div className='uk-section'>
            <div className='uk-container'>
                <div>
                <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                    <li>
                        <a href="/#">
                            About Institute
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            Director's Messages
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            Principal's Messages
                        </a>
                    </li>
                </ul>

                <ul className="uk-switcher uk-margin">
                    <li>
                        <h1 className='custom_heading'>
                            About the <span>
                            Institute
                            </span>
                        </h1>
                        <div className="uk-child-width-1-2@m uk-grid-large uk-grid-match uk-flex-middle" data-uk-grid>
                            <div>
                                <div className="uk-card uk-padding-small uk-padding-remove-bottom">
                                    <p className='uk-text-justify'>
                                        The RCP College of Physiotherapy is one among the pioneers in the field of Physiotherapy education. It was started as the new blossom of Rathinam Group of Institutions with the focus on turnout skilled and dedicated physiotherapy professionals. 
                                    </p>
                                    <p>
                                        Rathinam College of Physiotherapy was established in the year 2021 and it offers an intense and high-quality Bachelor of Physiotherapy course that combines creative learning and experimental learning. The College of Physiotherapy is committed to striving to be one of the best Physiotherapy colleges in Coimbatore with 40+ years of educational excellence.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="min-height: 300; max-height: 600; animation: slide;autoplay: true; finite:false">

                                        <ul className="uk-slideshow-items">
                                            <li>
                                                <img src={Images.ABT_INS} alt="slider1" data-uk-cover/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>                    
                            </div>
                        </div>  
                    </li>
                    <li>
                        <h1 className='custom_heading'>
                            Director's <span>
                            Messages
                            </span>
                        </h1>
                        <div className="uk-child-width-1-2@m uk-grid-large uk-grid-match uk-flex-middle" data-uk-grid> 
                            <div>
                                <div className="uk-card">
                                    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="min-height: 300; max-height: 600; animation: slide;autoplay: true; finite:false">

                                        <ul className="uk-slideshow-items">
                                            <li>
                                                <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="slider2" data-uk-cover />
                                            </li>
                                            <li>
                                                <img src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=600" alt="slider1" data-uk-cover/>
                                            </li>
                                            <li>
                                                <img src="https://images.pexels.com/photos/1699414/pexels-photo-1699414.jpeg?auto=compress&cs=tinysrgb&w=600" alt="slider2" data-uk-cover />
                                            </li>
                                        </ul>
                                    </div>
                                </div>                    
                            </div>
                            <div>
                                <div className="uk-card uk-padding-small uk-padding-remove-bottom">
                                    <p className='uk-text-justify'>
                                        When you walk through the portals of Rathinam, you are entering into a world that leads to your future. We believe that acquiring a degree is only a part of the learning process. The bigger quest is to prepare the students mentally to lead their lives better 
                                    </p>
                                    <p>
                                        At Rathinam, our goal is to create global leaders who will contribute their knowledge in building a more prosperous and peaceful world. We are committed to inculcate strong, ethical and moral values to our students. Our faculty members prepare the students to become self-reliant
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </li>
                    <li>
                        <h1 className='custom_heading'>
                            Principal's <span>
                            Messages
                            </span>
                        </h1>
                        <div className="uk-child-width-1-2@m uk-grid-large uk-grid-match uk-flex-middle" data-uk-grid>
                            <div>
                                <div className="uk-card uk-padding-small uk-padding-remove-bottom">
                                    <p className='uk-text-justify'>
                                        A good education is the foundation for a better future. At Rathinam College of Physiotherapy, we have a team of dedicated academicians who aim to nurture every student excel both personally and professionally, providing guidance to raise them even beyond gates. Students are exposed to a conducive learning environment to achieve their full potential and our task is to make it possible.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="min-height: 300; max-height: 600; animation: slide;autoplay: true; finite:false">

                                        <ul className="uk-slideshow-items">
                                            <li>
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Hl4wx5wfH4k" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </li>
                                            <li>
                                                <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="slider2" data-uk-cover />
                                            </li>
                                        </ul>
                                    </div>
                                </div>                    
                            </div>
                        </div> 
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default academic