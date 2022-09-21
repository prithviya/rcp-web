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
                                About RCP
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                Chairman's Message
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                Principal's Message
                            </a>
                        </li>
                    </ul>

                    <ul className="uk-switcher uk-margin">
                        <li>
                            <h1 className='custom_heading'>
                                About <span>
                                RCP
                                </span>
                            </h1>
                            <div className="uk-child-width-1-2@m uk-grid-large uk-grid-match uk-flex-middle" data-uk-grid>
                                <div>
                                    <div className="uk-card uk-padding-small uk-padding-remove-bottom">
                                        <p className='uk-text-justify'>
                                            Rathinam College of Physiotherapy (RCP) is one among the pioneers in the field of Physiotherapy education. It was started as a new blossom of Rathinam Group of Institutions with the focus to produce skilled and dedicated Physiotherapy Professionals. 
                                        </p>
                                        <p>
                                            Rathinam College of Physiotherapy was established in the year 2021 and it offers an intense and high-quality Bachelor of Physiotherapy (BPT) course that combines creative and experimental learning. The College of Physiotherapy is committed to strive to be one of the best Physiotherapy colleges in Coimbatore with educational excellence.
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
                                Chairman's <span>
                                Message
                                </span>
                            </h1>
                            <div class="uk-panel">
                                <img class="uk-align-left uk-margin-remove-adjacent"  src={Images.CHAIRMAN} width="225" height="150" alt="Example image"/>
                                <p className='uk-text-justify'>
                                    When you walk through the portals of Rathinam, you are entering into a world that leads to your future. We believe that acquiring a degree is only a part of the learning process. The bigger quest is to prepare the students mentally to lead their lives better. 
                                </p>
                                <p className='uk-text-justify'>
                                    At Rathinam, our goal is to create global leaders who will contribute their knowledge in building a more prosperous and peaceful world. We are committed to inculcate strong, ethical and moral values to our students. Our faculty members prepare the students to become self-reliant.
                                </p>
                                <p className='uk-text-justify'>
                                Finally, I have a message to share, “Do everything to keep the name and fame of the RATHINAM  high”.
                                </p>
                                <p className='uk-text-justify'>
                                Wishing you the best of everything.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h1 className='custom_heading'>
                                Principal's <span>
                                Message
                                </span>
                            </h1>
                            <div class="uk-panel">
                                <img class="uk-align-left uk-margin-remove-adjacent"  src={Images.PRINCIPAL} width="350" height="200" alt="Example image"/>
                                    <p className='uk-text-justify'>
                                            Welcome to Rathinam College of Physiotherapy (RCP), an institution that rests on a strong academic foundation, merged with modern approaches that mould youth into successful professionals. RCP is well known for its commitment towards excellence in every aspect. It is a blend of competent academicians, state of the art infrastructure, experienced and efficient management, safe and convenient environment to provide perfect balance in academics, sports and social opportunities for the students.
                                </p>
                                <p className='uk-text-justify'>
                                Our aim is to make students learning an enriching, pleasant and fulfilling experience, combining theory and practical’s in pedagogy. Focus is made not only on ‘what is taught’ but also ‘the way it is taught’. We strive to make our students good human beings and also prestigious professionals through multiple teaching strategies during their journey with us.
                                </p>
                                <p className='uk-text-justify'>
                                I am extremely proud of the professionalism, commitment, dedication and teamwork of our well experienced staffs to deliver excellent education for students in a caring and supportive environment. I believe in upholding high education standards with an absolute commitment to improve the student education process, contributing to their holistic development. Students have to keep in mind that their success is our achievement.
                                </p>
                                <p className='uk-text-justify'>
                                    Choosing the right institution to enrol your son/daughter is the best investment in your life and is a significant decision for the long term. As put forward by Nelson Mandela, “Education is the most powerful weapon which you can use to change the world.” With good education, we can alter the society for the better, contributing to our Nation’s progress too.
                                </p>
                                <p className='uk-text-justify'>
                                I wish all the students a grand success in their career. We are here to support you to achieve your dreams and come out with flying colours!!!!!
                                </p>
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