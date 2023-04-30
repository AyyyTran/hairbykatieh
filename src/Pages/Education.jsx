import React from 'react';
import ImageSection from '../Components/ImageSection';
import InfoSection from '../Components/InfoSection';
import EducationData from '../Data/EducationData';
const Education = () => {
  return (
    <div className="text-grey lg:flex lg:justify-center">
      <InfoSection
        subheading={EducationData.subheading}
        heading={EducationData.heading}
        description={EducationData.description}
        imageStart={EducationData.imageStart}
        icons={EducationData.icons}
      />
      <ImageSection
        imageURL={EducationData.imageURL}
        imageDesc={EducationData.imageDesc}
        imageStart={EducationData.imageStart}
      />
    </div>
  );
};

export default Education;
