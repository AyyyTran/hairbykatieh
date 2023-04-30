import React from 'react';
import InfoSection from '../Components/InfoSection';
import LocationData from '../Data/LocationData';
import Title from '../Components/Title';
import MapSection from '../Components/MapSection';

const Location = () => {
  return (
    <div className="text-grey location">
      <Title title={LocationData.title} />
      <div className="text-grey lg:flex lg:justify-center">
        <InfoSection
          subheading={LocationData.subheading}
          heading={LocationData.heading}
          description={LocationData.description}
          imageStart={LocationData.imageStart}
          icons={LocationData.icons}
        />
        <MapSection />
      </div>
    </div>
  );
};

export default Location;
