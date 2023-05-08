import React from 'react';
import InfoSection from '../Components/InfoSection';
import LocationData from '../Data/LocationData';
import Title from '../Components/Title';
import MapSection from '../Components/MapSection';
import {Fade} from 'react-reveal';

const Location = () => {
  return (
    <div className="text-grey location">
      <Title title={LocationData.title} />
      <div className="text-grey lg:flex lg:justify-center">
        <Fade down>
          <InfoSection
            subheading={LocationData.subheading}
            heading={LocationData.heading}
            description={LocationData.description}
            imageStart={LocationData.imageStart}
            icons={LocationData.icons}
          />
        </Fade>
        <Fade up>
          <MapSection />
        </Fade>
      </div>
    </div>
  );
};

export default Location;
