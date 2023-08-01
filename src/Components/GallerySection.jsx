import React from 'react';
import Carousel from 'better-react-carousel';
import Gallery1 from '../Images/gallery1.png';
import Gallery2 from '../Images/gallery2.png';
import Gallery3 from '../Images/gallery3.png';
import Gallery4 from '../Images/gallery4.png';
import Gallery5 from '../Images/gallery5.png';
import Gallery6 from '../Images/gallery6.png';
import Gallery7 from '../Images/gallery7.png';
import Gallery8 from '../Images/gallery8.png';

const GallerySection = () => {
  const images = [
    {
      type: 'image',
      url: Gallery1,
    },
    {
      type: 'image',
      url: Gallery2,
    },
    {
      type: 'image',
      url: Gallery3,
    },
    {
      type: 'image',
      url: Gallery4,
    },
    {
      type: 'image',
      url: Gallery5,
    },
    {
      type: 'image',
      url: Gallery6,
    },
    {
      type: 'image',
      url: Gallery7,
    },
    {
      type: 'image',
      url: Gallery8,
    },
  ];

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Carousel cols={2} rows={1} loop showArrows autoplay={3000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image.url}
              alt={`Image ${index}`}
              className="w-full max-w-full max-h-full rounded-xl"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GallerySection;
