import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';
import InfoData from '../Data/InfoData';

const Hero = () => {
  return (
    <div className="text-grey lg:flex lg:justify-center">
      <InfoSection data={InfoData} />
      <ImageSection />
    </div>
  );
};

export default Hero;
