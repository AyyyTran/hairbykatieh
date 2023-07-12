import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';
import HeroData from '../Data/HeroData';
import {Fade} from 'react-reveal';
const Hero = () => {
  return (
    <div className="text-grey lg:flex lg:justify-center lg:items-center lg:h-[100vh] hero  ">
      <Fade down>
        <InfoSection
          subheading={HeroData.subheading}
          heading={HeroData.heading}
          description={HeroData.description}
          imageStart={HeroData.imageStart}
          icons={HeroData.icons}
        />
      </Fade>
      <Fade right>
        <ImageSection
          imageURL={HeroData.imageURL}
          imageDesc={HeroData.imageDesc}
          imageStart={HeroData.imageStart}
        />
      </Fade>
    </div>
  );
};

export default Hero;
