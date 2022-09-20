import React from 'react';
import './event.css';
import Gallery from '../Gallery/gallery';

function event() {
  return (
    <div>
      <div>
        <div className="uk-background-contain uk-background-muted custom_banner_section uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle">
          <h1>Gallery</h1>
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
      <Gallery/>
      <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='custom_heading'>
              Event <span>Videos</span>
            </h1>
            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    <div class="uk-card">
                      <iframe width="100%" height="275" src="https://www.youtube.com/embed/rS_couHoWWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <div>
                  <div className='uk-card'>
                    <iframe width="100%" height="275" src="https://www.youtube.com/embed/LCEiC8TZMbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default event