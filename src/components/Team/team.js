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
                            <ul className="uk-slider-items uk-flex-middle uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-top uk-grid-medium">
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
                                                <h5 className='uk-text-bold'>
                                                    Prof. Karthikeyan. S
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    M.P.T (ORTHO)., MIAP., MMTFI., CSTMT., CDNP., (CMP)., PG.Dip.Fitness., Diabetes Educator.,
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold uk-text-bold'>
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
                                                <h5 className='uk-text-bold'>
                                                    Prof.Roshini. R
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    M.P.T (OBG).,MIAP.,Diabetes Educator., 
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
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
                                                        <img alt="team_image" src={Images.TEAM_ITEM_4}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                    Mr. Arunkumar K. R
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    M.P.T (Neuro)., 
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
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
                                                        <img alt="team_image" src={Images.TEAM_ITEM_8}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                Ms.Malathi. P
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    B.P.T, MIAP, PGDSM, M.A (Yoga).,
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
                                                        Tutor
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
                                                        <img src={Images.TEAM_ITEM_12} alt="team_image"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                    Mr.Sundareswaran. R
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                B.P.T.,
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold uk-text-bold'>
                                                    Clinical Instructor
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
                                                        <img alt="team_image" src={Images.TEAM_ITEM_7}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                   Mr.Vanjimuthu Kumar. K
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    MSW.,
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
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
                                                        <img alt="team_image" src={Images.TEAM_ITEM_9}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                Dr.Bhuvaneswari. N
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    MSc (Physics)., PhD.,
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
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
                                                        <img alt="team_image" src={Images.TEAM_ITEM_10}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                    Mr.Anandha Kumar.B
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    MCA.,M.Phil.,(Ph.D).,
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
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
                                                        <img alt="team_image" src={Images.TEAM_ITEM_6}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                    Ms.Revathi. S
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    MSc (Medical Anatomy)
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
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
                                                        <img alt="team_image" src={Images.TEAM_ITEM_11}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h5 className='uk-text-bold'>
                                                    Asst.Prof Ms.Kaviya. P
                                                </h5>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                <p className='' style={{fontSize:'0.75rem'}}>
                                                    MSc (Applied Psychology)
                                                </p>
                                                </p>
                                                <div>
                                                    <p className='text-black uk-text-bold'>
                                                        Assistant Professor
                                                    </p>  
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <a className="uk-position-top-right uk-position uk-margin-medium-right uk-hidden-hover" href="/#"  data-uk-slider-item="previous">
                            <img src="https://img.icons8.com/nolan/50/3bb18e/007ccf/previous.png" alt="team_image"/>
                        </a>
                        <a className="uk-position-right uk-position uk-hidden-hover" href="/#" data-uk-slider-item="next">
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