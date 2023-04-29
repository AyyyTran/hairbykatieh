import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';
import Woman from '../Images/woman.jpg';
const Hero = () => {
  const InfoData = {
    subheading: ' Discover Your Perfect Style',
    heading: 'Expert Hair Care Tailored To You.',
    description:
      'Discover the artistry of Katie! A talented stylist with an eye for detail and a passion for creating unique, beautiful hairstyles that bring out your natural beauty!',
    imageURL: Woman,
    imageDesc: 'Woman',
  };

  return (
    <div className="text-grey lg:flex lg:justify-center">
      <InfoSection
        subheading={InfoData.subheading}
        heading={InfoData.heading}
        description={InfoData.description}
      />
      <ImageSection
        imageURL={InfoData.imageURL}
        imageDesc={InfoData.imageDesc}
      />
    </div>
  );
};

export default Hero;
