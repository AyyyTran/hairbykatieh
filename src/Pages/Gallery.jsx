import React from 'react';
import {Fade} from 'react-reveal';
import Title from '../Components/Title';
import GalleryData1, {GalleryData2, GalleryData3} from '../Data/GalleryData';

const Gallery = () => {
  return (
    <div className="text-grey about">
      <Title title={GalleryData1.title} />
      <div div className="text-grey lg:flex lg:justify-center">
        <Fade up></Fade>
      </div>
    </div>
  );
};

export default Gallery;
