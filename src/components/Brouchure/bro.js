import React from 'react';
import Brochure from '../../Assets/brochure.pdf';
import Images from '../../Constant/static';

function bro() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='custom_heading'>
                Clinical <span>Training</span>
            </h1>
            <div class="uk-flex-middle" data-uk-grid>                
                <div class="uk-width-expand@m">
                    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                        <div>
                            <div class="uk-card-body">
                                <p className='text-black'>
                                    Curriculum of Physiotherapy Programmes has been designed in such a way to understand the basic concepts in the field and to apply the knowledge during the Clinical training in the real health care setup. The Physiotherapy Professionals are expected to have excellent skills required in their respective field of study.
                                </p>
                            </div>
                        </div>
                        <div class="uk-card-media-left uk-cover-container">
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="min-height: 300; max-height: 600; animation: slide;autoplay: true; finite:false">
                                <ul className="uk-slideshow-items">
                                    <li>
                                        <img src={Images.CLI_VISIT_1} alt="slider2" data-uk-cover />
                                    </li>
                                    <li>
                                        <img src={Images.CLI_VISIT_2} alt="slider1" data-uk-cover/>
                                    </li>
                                    <li>
                                        <img src={Images.CLI_VISIT_3} alt="slider2" data-uk-cover />
                                    </li>
                                    <li>
                                        <img src={Images.CLI_VISIT_4} alt="slider2" data-uk-cover />
                                    </li>
                                    <li>
                                        <img src={Images.CLI_VISIT_5} alt="slider2" data-uk-cover />
                                    </li>
                                    <li>
                                        <img src={Images.CLI_VISIT_6} alt="slider2" data-uk-cover />
                                    </li>
                                    <li>
                                        <img src={Images.CLI_VISIT_7} alt="slider2" data-uk-cover />
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="uk-width-auto@m">
                    <div class="uk-card uk-card-default uk-card-body">
                       <h4 className=''>
                            What would you like to do?
                       </h4>
                       <div class="uk-clearfix">
                            <div class="uk-float-right">
                                <div class="uk-card">
                                    <a href='https://admissions.rathinamcollege.edu.in/'>
                                        <button class="uk-button uk-button-primary">Apply now</button>
                                    </a>    
                                </div>
                            </div>
                            <div class="uk-float-left">
                                <div class="uk-card uk-card-default">
                                    <a href={Brochure} download="RCP_Brochure.pdf"  rel="noopener noreferrer">
                                        <button class="uk-button uk-button-danger">Brochure</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default bro