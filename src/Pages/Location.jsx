import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';
import LocationData from '../Data/LocationData';
import Title from '../Components/Title';

const Location = () => {
  return (
    <div className="text-grey about">
      <Title title={LocationData.title} />
      <div className="text-grey lg:flex lg:justify-center">
        <InfoSection
          subheading={LocationData.subheading}
          heading={LocationData.heading}
          description={LocationData.description}
          imageStart={LocationData.imageStart}
          icons={LocationData.icons}
        />
        {/* <ImageSection
          imageURL={LocationData.imageURL}
          imageDesc={LocationData.imageDesc}
          imageStart={LocationData.imageStart}
        /> */}
      </div>
    </div>
  );
};

export default Location;
