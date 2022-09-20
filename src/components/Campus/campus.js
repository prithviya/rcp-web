import React from 'react';
import Images from '../../Constant/static';

function campus() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <h1 className='custom_heading'>
                Campus <span>Life RCP</span>
            </h1>
            <div class="uk-flex-middle" data-uk-grid>
                <div class="uk-width-1-3@m">
                    <div class="uk-card">
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="min-height: 300; max-height: 600; animation: slide;autoplay: true; finite:false">
                            <ul className="uk-slideshow-items">
                                <li>
                                    <img src={Images.CEL_VISIT} alt="slider2" data-uk-cover />
                                </li>
                                <li>
                                    <img src={Images.CEL_VISIT_1} alt="slider1" data-uk-cover/>
                                </li>
                                <li>
                                    <img src={Images.CEL_VISIT_2} alt="slider2" data-uk-cover />
                                </li>
                                <li>
                                    <img src={Images.CEL_VISIT_3} alt="slider2" data-uk-cover />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="uk-width-2-3@m">
                    <div class="uk-card uk-card-default uk-card-body">
                       <p className='text-black'>
                            Why should we opt Rathinam? Though the answer varies for each student, there are some things that we all agree upon. There is diversity; people here are open-minded, passionate towards their work, and friendly.
                       </p>
                       <p className='text-black'>
                            We are one of the best arts and science colleges in Coimbatore with equal aspects of creativity and knowledge. We offer an all-inclusive residential college experience, which means that the campus is a lively place to learn, live, play, dine, grow, and explore.
                       </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default campus