import React from 'react';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import InfoSection from '../Components/InfoSection';
import Woman from '../Images/woman.jpg';
import AboutData from '../Data/AboutData';

const About = () => {
  return (
    <div className="text-grey about">
      <Title />
      <ImageSection
        imageURL={AboutData.imageURL}
        imageDesc={AboutData.imageDesc}
      />
      <InfoSection
        subheading={AboutData.subheading}
        heading={AboutData.heading}
        description={AboutData.description}
      />
    </div>
  );
};

export default About;
