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
      <div div className="text-grey lg:flex lg:justify-center">
        <ImageSection
          imageURL={AboutData.imageURL}
          imageDesc={AboutData.imageDesc}
          imageStart={AboutData.imageStart}
        />
        <InfoSection
          subheading={AboutData.subheading}
          heading={AboutData.heading}
          description={AboutData.description}
          imageStart={AboutData.imageStart}
        />
      </div>
    </div>
  );
};

export default About;
