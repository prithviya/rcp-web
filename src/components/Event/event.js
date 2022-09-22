import React from 'react';
import './event.css';
import Images from '../../Constant/static';


function event() {
  return (
    <div>
      <div>
        <div className="uk-background-contain uk-background-muted custom_banner_section uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle">
          <h1>Gallery</h1>
        </div>
      </div>
      <div className='uk-section'>
        <div className='uk-container'>
          <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-fade">
              <li><a href="/#">Teacher's Day</a></li>
              <li><a href="/#">Aungraha</a></li>
              <li><a href="/#">World PT Day</a></li>
          </ul>

          <ul class="uk-switcher uk-margin">
              <li>
                <div>
                  <h2 className='text-center uk-margin'>
                    Teacher's Day Celebration - 2022
                  </h2>
                  <div class="uk-child-width-1-3@m uk-grid-small uk-flex-middle uk-grid-match" data-uk-grid>
                    <div>
                      <div class="uk-card">
                        <iframe width="100%" height="265" src="https://www.youtube.com/embed/Hl4wx5wfH4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_1} />
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_2} />
                      </div>
                    </div>                                 
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_9} />
                      </div>
                    </div>                  
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_10} />
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_5} />
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_3} />
                      </div>
                    </div>                 
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_11} />
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_6} />
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={Images.GALLERY_ITEM_12} />
                      </div>
                    </div>
                  </div>
                </div>  
              </li>
              <li>
                <div>
                  <h2 className='text-center uk-margin'>
                    Aungraha - Freshmen Induction
                  </h2>
                  <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                      <div className='uk-card'>
                        <iframe width="100%" height="265" src="https://www.youtube.com/embed/LCEiC8TZMbE" title="YouTube video player" data-uk-video="autoplay: inview; automute: false"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={ Images.GALLERY_ITEM_13 }/>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={ Images.GALLERY_ITEM_14 }/>
                      </div>
                    </div>                                
                    <div>
                    <div class="uk-card">
                        <img alt='Gallery_image' src={ Images.GALLERY_ITEM_17 }/>
                      </div>
                    </div>                  
                    <div>
                    <div class="uk-card">
                        <img alt='Gallery_image' src={ Images.GALLERY_ITEM_16 }/>
                      </div>
                    </div>
                    <div>
                      <div className='uk-card'>
                        <iframe width="100%" height="265" src="https://www.youtube.com/embed/QRK0NtM9SrI" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={ Images.GALLERY_ITEM_15 }/>
                      </div>
                    </div>               
                    <div>
                      <div className='uk-card'>
                        <iframe width="100%" height="265" src="https://www.youtube.com/embed/ZXwFk3xzTXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div>
                      <div class="uk-card">
                        <img alt='Gallery_image' src={ Images.GALLERY_ITEM_18 }/>
                      </div>
                    </div>
                  </div>
                </div> 
              </li>
              <li>
                <div>
                    <h2 className='text-center uk-margin'>
                      World Physiotherapy Day - 2022
                    </h2>
                    <div class="uk-child-width-1-3@m uk-grid-small uk-flex-middle uk-grid-match" data-uk-grid>
                        <div>
                          <div className="uk-card">
                              <iframe width="100%" height='265' src="https://www.youtube.com/embed/Fa_sShGGsUk" title="YouTube video player" frameborder="0" data-uk-video="autoplay: inview; automute: false" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div>
                        {/* <div>
                          <div class="uk-card">
                            <img alt='Gallery_image' src={Images.GALLERY_ITEM_8} />
                          </div>
                        </div> */}
                        <div>
                          <div class="uk-card">
                            <img alt='Gallery_image' src={ Images.GALLERY_ITEM_20 }/>
                          </div>
                        </div>                                
                        <div>
                          <div class="uk-card">
                            <img alt='Gallery_image' src={ Images.GALLERY_ITEM_4 }/>
                          </div>
                        </div>                  
                        <div>
                          <div className="uk-card">
                            <iframe width="100%" height="265" src="https://www.youtube.com/embed/SVCKPPK2y4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        <div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
          </ul>
        </div>
      </div>
      <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <h1 className='custom_heading'>
              Our <span>Videos</span>
            </h1>
            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                  <div className='uk-card'>
                    <iframe width="100%" height="275" src="https://www.youtube.com/embed/NOtLJ1ayphk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div>
                    <div class="uk-card">
                      <iframe width="100%" height="275" src="https://www.youtube.com/embed/r-YJion8qUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                      <iframe width="100%" height="275" src="https://www.youtube.com/embed/eGDaO-Wp2yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                  <div className='uk-card'>
                    <iframe width="100%" height="275" src="https://www.youtube.com/embed/0ihVIcEexxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div>
                  <div className='uk-card'>
                    <iframe width="100%" height="275" src="https://www.youtube.com/embed/oP2kGwLzIqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default event