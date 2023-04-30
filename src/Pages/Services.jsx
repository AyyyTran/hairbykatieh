import React from 'react';
import ServicesSection from '../Components/ServicesSection';
import ServicesData, {
  ServicesTitleData,
  ServicesColorData,
} from '../Data/ServicesData';
import Title from '../Components/Title';

const Services = () => {
  return (
    <div className="services">
      <Title title={ServicesTitleData.title} />
      <div className="flex justify-center">
        <ServicesSection
          data={ServicesData}
          colourData={ServicesColorData}
          title={ServicesTitleData.hairTitle}
          colourTitle={ServicesTitleData.colourTitle}
        />
      </div>
    </div>
  );
};

export default Services;
