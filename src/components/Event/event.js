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
          <div uk-filter="target: .js-filter">
            <ul class="uk-subnav uk-subnav-pill">
                <li class="uk-active" uk-filter-control="[data-color='white']"><a href="/#">Teacher's Day</a></li>
                <li uk-filter-control="[data-color='black']"><a href="/#">Aungraha</a></li>
                <li uk-filter-control="[data-color='blue']"><a href="/#">World PT Day</a></li>
            </ul>
            <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-grid-match uk-flex-middle uk-text-center" data-uk-grid>
                <li data-color='black'>
                  <div className='uk-card'>
                    <iframe width="100%" height="265" src="https://www.youtube.com/embed/LCEiC8TZMbE" title="YouTube video player" data-uk-video="autoplay: inview; automute: false"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </li>
                <li data-color="white">
                  <div class="uk-card">
                    <iframe width="100%" height="265" src="https://www.youtube.com/embed/Hl4wx5wfH4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </li>
                <li data-color='blue'>
                    <div className="uk-card">
                        <iframe width="100%" height='265' src="https://www.youtube.com/embed/Fa_sShGGsUk" title="YouTube video player" frameborder="0" data-uk-video="autoplay: inview; automute: false" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </li>
                <li data-color="white">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={Images.GALLERY_ITEM_1} />
                    </div>
                </li>
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_2} />
                  </div>
                </li>
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_3} />
                  </div>
                </li>
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_5} />
                  </div>
                </li>
                <li data-color="black">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_13 }/>
                    </div>
                </li>
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_6} />
                  </div>
                </li>
                <li data-color="black">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_14 }/>
                    </div>
                </li>
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_8} />
                  </div>
                <li data-color="blue">
                  <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_20 }/>
                    </div>
                </li>
                
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_9} />
                  </div>
                </li>
                <li data-color="black">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_15 }/>
                    </div>
                </li>
                <li data-color='black'>
                  <div className='uk-card'>
                    <iframe width="100%" height="265" src="https://www.youtube.com/embed/QRK0NtM9SrI" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </li>
                <li data-color="black">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_16 }/>
                    </div>
                </li>
                <li data-color="black">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_17 }/>
                    </div>
                </li>
                
                <li data-color="blue">
                <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_4 }/>
                    </div>
                </li>
                <li data-color='blue'>
                    <div className="uk-card">
                      <iframe width="100%" height="265" src="https://www.youtube.com/embed/SVCKPPK2y4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </li>
                <li data-color="black">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_18 }/>
                    </div>
                </li>
                <li data-color='black'>
                  <div className='uk-card'>
                    <iframe width="100%" height="265" src="https://www.youtube.com/embed/ZXwFk3xzTXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </li>
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_10} />
                  </div>
                </li>
                
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_11} />
                  </div>
                </li>
                <li data-color="blue">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_19 }/>
                    </div>
                </li>
                <li data-color="white">
                  <div class="uk-card">
                    <img alt='Gallery_image' src={Images.GALLERY_ITEM_12} />
                  </div>
                </li>
                {/* <li data-color="black">
                    <div class="uk-card">
                      <img alt='Gallery_image' src={ Images.GALLERY_ITEM_20 }/>
                    </div>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='uk-section'>
        <div className='uk-container'>
          <div class="uk-card">
            <h1 className='custom_heading'>
              Latest <span>Event</span>
            </h1>
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slider>
              <ul class="uk-slider-items uk-child-width-1-3@m uk-grid-small">
                <li>
                  <div data-uk-grid="" class="uk-grid-collapse cus-card uk-card-default animation uk-grid">
                    <div class="uk-card-media-top">
                        <img alt='Gallery_image' src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=740&t=st=1663049867~exp=1663050467~hmac=fb4ca22fde77c06877fb16a081494f2e687365155ebe15d6d35711d99cded51c" width="1800" height="1200" alt=""/>
                    </div>
                    <div class="uk-width-auto uk-card-small uk-first-column">
                      <div class="custom-date uk-card-body uk-padding uk-margin-small-top">
                        <h1 class="uk-text-bold uk-text-center text-white uk-margin-remove">
                          15
                        </h1>
                        <h4 class="uk-text-center uk-text-bold text-white uk-margin-remove">
                          DEC
                        </h4>
                      </div>
                    </div>
                    <div class="uk-width-auto uk-card-small">
                      <div class="custom-date uk-card-body uk-padding-remove-left uk-margin-small-top uk-padding-remove-right">
                        <hr class="uk-divider-vertical"/>
                      </div>
                    </div>
                    <div class="uk-width-expand uk-card-small">
                      <div class="uk-card-body uk-padding-small">
                        <h4 class="uk-text-capitalize text-white uk-text-bold uk-text-left uk-margin-small-bottom">
                          Event Title
                        </h4>
                        <p class="uk-text-meta uk-margin-small-top text-white uk-margin-small-bottom">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
                        </p>
                        <div class="uk-clearfix">
                          <div class="uk-float-left">
                            <div class="uk-text-bold text-white">Date: 15-dec-2021</div>
                          </div>
                        <div class="uk-float-right">
                          <div class="uk-text-bold text-white">Time: 11.00</div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div data-uk-grid="" class="uk-grid-collapse cus-card uk-card-default animation uk-grid">
                    <div class="uk-card-media-top">
                        <img src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=740&t=st=1663049867~exp=1663050467~hmac=fb4ca22fde77c06877fb16a081494f2e687365155ebe15d6d35711d99cded51c" width="1800" height="1200" alt=""/>
                    </div>
                    <div class="uk-width-auto uk-card-small uk-first-column">
                      <div class="custom-date uk-card-body uk-padding uk-margin-small-top">
                        <h1 class="uk-text-bold uk-text-center text-white uk-margin-remove">
                          15
                        </h1>
                        <h4 class="uk-text-center uk-text-bold text-white uk-margin-remove">
                          DEC
                        </h4>
                      </div>
                    </div>
                    <div class="uk-width-auto uk-card-small">
                      <div class="custom-date uk-card-body uk-padding-remove-left uk-margin-small-top uk-padding-remove-right">
                        <hr class="uk-divider-vertical"/>
                      </div>
                    </div>
                    <div class="uk-width-expand uk-card-small">
                      <div class="uk-card-body uk-padding-small">
                        <h4 class="uk-text-capitalize text-white uk-text-bold uk-text-left uk-margin-small-bottom">
                          Event Title
                        </h4>
                        <p class="uk-text-meta uk-margin-small-top text-white uk-margin-small-bottom">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
                        </p>
                        <div class="uk-clearfix">
                          <div class="uk-float-left">
                            <div class="uk-text-bold text-white">Date: 15-dec-2021</div>
                          </div>
                        <div class="uk-float-right">
                          <div class="uk-text-bold text-white">Time: 11.00</div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div data-uk-grid="" class="uk-grid-collapse cus-card uk-card-default animation uk-grid">
                    <div class="uk-card-media-top">
                        <img src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=740&t=st=1663049867~exp=1663050467~hmac=fb4ca22fde77c06877fb16a081494f2e687365155ebe15d6d35711d99cded51c" width="1800" height="1200" alt=""/>
                    </div>
                    <div class="uk-width-auto uk-card-small uk-first-column">
                      <div class="custom-date uk-card-body uk-padding uk-margin-small-top">
                        <h1 class="uk-text-bold uk-text-center text-white uk-margin-remove">
                          15
                        </h1>
                        <h4 class="uk-text-center uk-text-bold text-white uk-margin-remove">
                          DEC
                        </h4>
                      </div>
                    </div>
                    <div class="uk-width-auto uk-card-small">
                      <div class="custom-date uk-card-body uk-padding-remove-left uk-margin-small-top uk-padding-remove-right">
                        <hr class="uk-divider-vertical"/>
                      </div>
                    </div>
                    <div class="uk-width-expand uk-card-small">
                      <div class="uk-card-body uk-padding-small">
                        <h4 class="uk-text-capitalize text-white uk-text-bold uk-text-left uk-margin-small-bottom">
                          Event Title
                        </h4>
                        <p class="uk-text-meta uk-margin-small-top text-white uk-margin-small-bottom">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
                        </p>
                        <div class="uk-clearfix">
                          <div class="uk-float-left">
                            <div class="uk-text-bold text-white">Date: 15-dec-2021</div>
                          </div>
                        <div class="uk-float-right">
                          <div class="uk-text-bold text-white">Time: 11.00</div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Gallery/> */}
      <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='custom_heading'>
              Our <span>Videos</span>
            </h1>
            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
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
                <div>
                  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default event