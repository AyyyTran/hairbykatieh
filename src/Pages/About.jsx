import React from 'react';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import InfoSection from '../Components/InfoSection';
import AboutData from '../Data/AboutData';
import {Fade} from 'react-reveal';

const About = () => {
  return (
    <div className="text-grey about">
      <Title title={AboutData.title} />
      <div div className="text-grey lg:flex lg:justify-center">
        <Fade down>
          <ImageSection
            imageURL={AboutData.imageURL}
            imageDesc={AboutData.imageDesc}
            imageStart={AboutData.imageStart}
          />
        </Fade>
        <Fade right>
          <InfoSection
            subheading={AboutData.subheading}
            heading={AboutData.heading}
            description={AboutData.description}
            imageStart={AboutData.imageStart}
          />
        </Fade>
      </div>
    </div>
  );
};

export default About;
