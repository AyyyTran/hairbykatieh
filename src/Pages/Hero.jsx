import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';
import HeroData from '../Data/HeroData';
const Hero = () => {
  return (
    <div className="text-grey lg:flex lg:justify-center">
      <InfoSection
        subheading={HeroData.subheading}
        heading={HeroData.heading}
        description={HeroData.description}
      />
      <ImageSection
        imageURL={HeroData.imageURL}
        imageDesc={HeroData.imageDesc}
      />
    </div>
  );
};

export default Hero;
