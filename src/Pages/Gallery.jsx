import React from 'react';
import {Fade} from 'react-reveal';
import Title from '../Components/Title';
import GalleryData1 from '../Data/GalleryData';
import GallerySection from '../Components/GallerySection';

const Gallery = () => {
  return (
    <div className="text-grey gallery">
      <Title title={GalleryData1.title} />
      <Fade up>
        <GallerySection />
      </Fade>
    </div>
  );
};

export default Gallery;
