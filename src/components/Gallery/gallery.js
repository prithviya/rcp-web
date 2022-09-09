import React from 'react';
import './gallery.css';
import GALLERY_ITEM_1 from '../../Assets/gallery/gallery_img (1).webp';
import GALLERY_ITEM_2 from '../../Assets/gallery/gallery_img (2).webp';
import GALLERY_ITEM_3 from '../../Assets/gallery/gallery_img (3).webp';
import GALLERY_ITEM_4 from '../../Assets/gallery/gallery_img (4).webp';
import GALLERY_ITEM_5 from '../../Assets/gallery/gallery_img (5).webp';
import GALLERY_ITEM_6 from '../../Assets/gallery/gallery_img (6).webp';
import GALLERY_ITEM_7 from '../../Assets/gallery/gallery_img (7).webp';
import GALLERY_ITEM_8 from '../../Assets/gallery/gallery_img (8).webp';
import GALLERY_ITEM_9 from '../../Assets/gallery/gallery_img (9).webp';
import GALLERY_ITEM_10 from '../../Assets/gallery/gallery_img (10).webp';
import GALLERY_ITEM_11 from '../../Assets/gallery/gallery_img (11).webp';
import GALLERY_ITEM_12 from '../../Assets/gallery/gallery_img (12).webp';
import GALLERY_ITEM_13 from '../../Assets/gallery/gallery_img (13).webp';
import GALLERY_ITEM_14 from '../../Assets/gallery/gallery_img (14).webp';
import GALLERY_ITEM_15 from '../../Assets/gallery/gallery_img (15).webp';
import GALLERY_ITEM_16 from '../../Assets/gallery/gallery_img (16).webp';
import GALLERY_ITEM_17 from '../../Assets/gallery/gallery_img (17).webp';
import GALLERY_ITEM_18 from '../../Assets/gallery/gallery_img (18).webp';
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: GALLERY_ITEM_16,
    thumbnail: GALLERY_ITEM_16,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  {
    src: GALLERY_ITEM_17,
    thumbnail: GALLERY_ITEM_17,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  {
    src: GALLERY_ITEM_18,
    thumbnail: GALLERY_ITEM_18,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  {
    src: GALLERY_ITEM_13,
    thumbnail: GALLERY_ITEM_13,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  {
    src: GALLERY_ITEM_14,
    thumbnail: GALLERY_ITEM_14,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  {
    src: GALLERY_ITEM_15,
    thumbnail: GALLERY_ITEM_15,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  {
    src: GALLERY_ITEM_11,
    thumbnail: GALLERY_ITEM_11,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  {
    src: GALLERY_ITEM_12,
    thumbnail: GALLERY_ITEM_12,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
  
  {
    src: GALLERY_ITEM_1,
    thumbnail: GALLERY_ITEM_1,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Rathinam College Of Physiotheraphy"
  },
    {
      src: GALLERY_ITEM_1,
      thumbnail: GALLERY_ITEM_1,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Rathinam College Of Physiotheraphy"
    },
    {
        src: GALLERY_ITEM_2,
        thumbnail: GALLERY_ITEM_2,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Rathinam College Of Physiotheraphy"
    },
  
    {
        src: GALLERY_ITEM_3,
        thumbnail: GALLERY_ITEM_3,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Rathinam College Of Physiotheraphy"
    },
    {
        src: GALLERY_ITEM_4,
        thumbnail: GALLERY_ITEM_4,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Rathinam College Of Physiotheraphy"
    },
    {
        src: GALLERY_ITEM_5,
        thumbnail: GALLERY_ITEM_5,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Rathinam College Of Physiotheraphy"
    },
  
    {
        src: GALLERY_ITEM_6,
        thumbnail: GALLERY_ITEM_6,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Rathinam College Of Physiotheraphy"
    },
    {
        src: GALLERY_ITEM_7,
        thumbnail: GALLERY_ITEM_7,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Rathinam College Of Physiotheraphy"
    },
    {
        src: GALLERY_ITEM_8,
        thumbnail: GALLERY_ITEM_8,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      caption: "Rathinam College Of Physiotheraphy"
    },
    {
        src: GALLERY_ITEM_9,
        thumbnail: GALLERY_ITEM_9,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      caption: "Rathinam College Of Physiotheraphy"
    },
    {
        src: GALLERY_ITEM_10,
        thumbnail: GALLERY_ITEM_10,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      caption: "Rathinam College Of Physiotheraphy"
    },
    
  ];
function gallery() {
  return (
    <div className='uk-section uk-section-muted'>
        <h1 className='custom_heading'>
            Our <span>
            Gallery
            </span>
        </h1>
        <Gallery
      images={IMAGES}
      enableLightbox={true}
    //   maxRows={6}
      backdropClosesModal
      // currentImage={3}
    //   isOpen={ true}
     />
    </div>
  )
}

export default gallery