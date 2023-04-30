import React from 'react';

const ServicesSection = ({data, colourData, title, colourTitle}) => {
  const renderServices = () => {
    return data.map((service) => {
      return (
        <div key={service.id}>
          <div className="py-4 flex justify-center text-grey">
            <div className="w-48 pl-8 ">
              <h3 className="font-semibold">{service.title}</h3>
            </div>
            <div className="w-48 pl-4">
              <p className="flex justify-start">{service.price}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderColorServices = () => {
    return colourData.map((service) => {
      return (
        <div key={service.id}>
          <div className="py-4 flex justify-center text-grey">
            <div className="w-48 pl-8 ">
              <h3 className="font-semibold">{service.title}</h3>
            </div>
            <div className="w-48 pl-4">
              <p className="flex justify-start">{service.price}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-secondary rounded-3xl w-fit px-8 ">
      <div className="text-3xl bg-light flex mt-8 pt-8 justify-center rounded-t-2xl text-grey w-full">
        HAIR BY KATIE
      </div>
      <div className="bg-light rounded-b-2xl mb-8 pb-8 lg:flex">
        <div>
          <div className="text-2xl flex justify-center text-grey mt-8 mb-8">
            <p className="border-b-2 px-2 border-b-grey">{title}</p>
          </div>
          <div className="flex flex-col flex-wrap ml-8 text-xl">
            {renderServices()}
          </div>
        </div>
        <div>
          <div className="text-2xl flex justify-center text-grey mt-8 mb-8">
            <p className="border-b-2 px-2 border-b-grey">{colourTitle}</p>
          </div>
          <div className="flex flex-col flex-wrap ml-8 text-xl">
            {renderColorServices()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
