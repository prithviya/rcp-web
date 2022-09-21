import React from 'react';
import './about.css';

function about() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <div className="uk-child-width-1-2@m uk-grid-large uk-grid-match" data-uk-grid>
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
                        <div className="uk-card uk-card-default uk-card-body">
                            <p className='text-black uk-text-justify'>
                                Rathinam College is one of the Best Colleges in Coimbatore, Tamilnadu. As a top college in Coimbatore, we offer Arts & Science, Engineering, Management, Architecture & Physiotherapy courses. Rathinam began its journey more than 40 years ago with a vision to create an educational community with a global outlook. The dream kick-started when K.P.M Matriculation School was established in Eachanari, Coimbatore.
                            </p>
                        </div>
                    </div>                    
                </div>
                <div>
                    <div className="uk-card uk-padding-small uk-padding-remove-bottom">
                        <h1 className='custom_heading'>
                            Who <span>
                            We Are ?
                            </span>
                        </h1>
                        <p className='uk-text-justify'>
                            It was started as the new blossom of Rathinam Group of Institutions with the focus to produce skilled and dedicated Physiotherapy Professionals. Rathinam College of Physiotherapy was established in the year 2021 and it offers an intense and high-quality Bachelor of Physiotherapy (BPT) course that combines creative and experimental learning. The College of Physiotherapy is committed to strive to be one of the best Physiotherapy colleges in Coimbatore with educational excellence.
                        </p>
                    </div>
                    <div className="uk-child-width-1-2@m uk-grid-small uk-text-center uk-grid-match" data-uk-grid>
                        <div>
                            <div className="uk-card uk-card-default custom_abtsect_card">
                                <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/FFFFFF/external-teacher-elearning-and-education-justicon-lineal-justicon.png" alt='demo'/>
                                <h5 className="text-white custom_sub_title uk-margin-small">Experienced Staff</h5>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default custom_abtsect_card">
                                <img src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/FFFFFF/external-laboratory-ecology-tulpahn-detailed-outline-tulpahn.png" alt='demo1'/>
                                <h5 className="text-white custom_sub_title uk-margin-small">Hi-tech Labs</h5>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default custom_abtsect_card">
                                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-Projector-cenima-flatart-icons-outline-flatarticons.png" alt='demo2'/>
                                <h5 className="text-white custom_sub_title uk-margin-small">Smart Classes</h5>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default custom_abtsect_card">
                            <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/FFFFFF/external-training-training-and-coaching-wanicon-lineal-wanicon.png" alt='demo3'/>
                                <h5 className="text-white custom_sub_title uk-margin-small">Workshops</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about