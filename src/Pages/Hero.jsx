import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';

const Hero = () => {
  return (
    <div className="text-grey lg:flex lg:justify-center">
      <InfoSection />
      <ImageSection />
    </div>
  );
};

export default Hero;
