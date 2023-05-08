import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';
import EducationData from '../Data/EducationData';
import {Fade} from 'react-reveal';
const Education = () => {
  return (
    <div className="text-grey lg:flex lg:justify-center">
      <Fade down>
        <InfoSection
          subheading={EducationData.subheading}
          heading={EducationData.heading}
          description={EducationData.description}
          imageStart={EducationData.imageStart}
          icons={EducationData.icons}
        />
      </Fade>
      <Fade right>
        <ImageSection
          imageURL={EducationData.imageURL}
          imageDesc={EducationData.imageDesc}
          imageStart={EducationData.imageStart}
        />
      </Fade>
    </div>
  );
};

export default Education;
