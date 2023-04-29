import React from 'react';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import InfoSection from '../Components/InfoSection';
import Woman from '../Images/woman.jpg';

const About = () => {
  const InfoData = {
    subheading: 'Welcome to Hair.byKatieH',
    heading: 'Your Hair Care Needs Are Our Top Priority.',
    description:
      'Meet Katie, a passionate and experienced hairdresser dedicated to providing personalized service and a comfortable atmosphere. She specializes in blondes and brunettes and lived in colour.',
    imageURL: Woman,
    imageDesc: 'Woman',
  };
  return (
    <div className="text-grey about">
      <Title />
      <ImageSection
        imageURL={InfoData.imageURL}
        imageDesc={InfoData.imageDesc}
      />
      <InfoSection
        subheading={InfoData.subheading}
        heading={InfoData.heading}
        description={InfoData.description}
      />
    </div>
  );
};

export default About;
