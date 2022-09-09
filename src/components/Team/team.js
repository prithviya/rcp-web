import React from 'react';
import './team.css';
import Images from '../../Constant/static';

function team() {
  return (
    <div>
        <div className='uk-section'>
            <div className='uk-container'>
                <h1 className='custom_heading'>
                    Our <span>
                    Faculty
                    </span>
                </h1>
                <div data-uk-slider="finite: false; autoplay: true">
                    <div className="uk-position-relative">
                        <div className="uk-slider-container">
                            <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-top uk-grid-medium">
                                <li>
                                    <div>
                                        <div className="a-box">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img src={Images.TEAM_ITEM_1} alt="team_image"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5>
                                                    KARTHIKEYAN. S
                                                </h5>
                                                <div>
                                                    <p className='text-black'>
                                                        Principal
                                                    </p>  
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="a-box">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img alt="team_image" src={Images.TEAM_ITEM_2}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5>
                                                    ROSHINI. R
                                                </h5>
                                                <div>
                                                    <p className='text-black'>
                                                       Vice Principal
                                                    </p>  
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="a-box">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img src={Images.TEAM_ITEM_3} alt="team_image"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5>
                                                    KUMARESAN. M
                                                </h5>
                                                <div>
                                                    <p className='text-black'>
                                                        Assistant Professor
                                                    </p>  
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="a-box">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img src={Images.TEAM_ITEM_4} alt="team_image"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5>
                                                    CYNTHIA BENEDICT. J
                                                </h5>
                                                <div>
                                                    <p className='text-black'>
                                                        Assistant Professor
                                                    </p>  
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="a-box">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img alt="team_image" src="https://img.freepik.com/free-psd/young-businessman-3d-cartoon-avatar-portrait_627936-22.jpg?w=740&t=st=1662547020~exp=1662547620~hmac=01ba1b5d5cebb0f62db4239ef5cbb9e1c200b03b6c2b7f2ff4af250a70d11c9b"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5>
                                                SELVA SHRUTHI. V
                                                </h5>
                                                <div>
                                                    <p className='text-black'>
                                                        Assistant Professor
                                                    </p>  
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="a-box">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img alt="team_image" src="https://img.freepik.com/free-psd/young-businessman-3d-cartoon-avatar-portrait_627936-22.jpg?w=740&t=st=1662547020~exp=1662547620~hmac=01ba1b5d5cebb0f62db4239ef5cbb9e1c200b03b6c2b7f2ff4af250a70d11c9b"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5>
                                                    Prof. S. KARTHIKEYAN
                                                </h5>
                                                <div>
                                                    <p className='text-black'>
                                                        Principal
                                                    </p>  
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <a className="uk-position-top-right uk-position uk-margin-medium-right uk-hidden-hover" href="#"  data-uk-slider-item="previous">
                            <img src="https://img.icons8.com/nolan/50/3bb18e/007ccf/previous.png" alt="team_image"/>
                        </a>
                        <a className="uk-position-right uk-position uk-hidden-hover" href="#" data-uk-slider-item="next">
                            <img src="https://img.icons8.com/nolan/50/3bb18e/007ccf/next.png" alt='team_Image'/>
                        </a>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default team