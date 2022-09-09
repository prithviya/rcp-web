import React from 'react';
import './vision.css'; 
import Images from '../../Constant/static';

function vision() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
            <div>
                    <div class="uk-card uk-card-body">
                    <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                        <li><a href="#">Vision</a></li>
                        <li><a href="#">Mission</a></li>
                        <li><a href="#">Motto</a></li>
                    </ul>

                    <ul class="uk-switcher uk-margin">
                        <li>
                            <div>
                                <h5 className='uk-text-center uk-margin-remove'>
                                    Our Vision
                                </h5>
                                <img className='uk-text-center uk-align-center' src={Images.VISION_ICON} alt='vision_icon'/>
                                <p className='uk-text-justify'>
                                    To inculcate quality physiotherapy education and produce competent Physiotherapists to meet out the International standards.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5 className='uk-text-center uk-margin-remove'>
                                    Our Mission
                                </h5>
                                <img className='uk-text-center uk-align-center' src={Images.MISSION_ICON} alt='vision_icon'/>
                                <p className='uk-text-justify'>
                                    To impart quality education by providing a conducive learning environment to enrich students’ knowledge and skills to explore their talents in the field of Physiotherapy
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5 className='uk-text-center uk-margin-remove'>
                                    Our Mission
                                </h5>
                                <img className='uk-text-center uk-align-center' src={Images.MOTTO_ICON} alt='vision_icon'/>
                                <p className='uk-text-justify'>
                                    Shaping Youth into Professionals 
                                </p>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                    <iframe width="100%" height="390" src="https://www.youtube.com/embed/UUXYjeGhFDc" title="YouTube video player" frameborder="0" data-uk-video="autoplay: inview; automute: false" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default vision