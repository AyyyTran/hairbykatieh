import React from 'react';
import Instagram from '../Images/instagram.svg';
import Email from '../Images/email.png';

const InfoSection = (data) => {
  return (
    <>
      <div className="p-8 lg:pt-8">
        <div className="flex justify-start sm:justify-center lg:justify-start">
          <h3 className="pt-4 text-xl font-bold text-primary">
            {data.subheading}
          </h3>
        </div>
        <div className="flex justify-center lg:justify-start">
          <h1 className="pt-2 text-4xl max-w-lg">{data.heading}</h1>
        </div>
        <div className="flex justify-center">
          <p className="py-4 text-sm max-w-lg">{data.description}</p>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <button className="px-4 py-2 font-bold rounded-3xl bg-primary text-light focus:outline-none">
            Book Now!
          </button>
          {data.icons && (
            <div className="flex justify-center">
              <div className="pl-4">
                <img className="h-8 w-7" src={Instagram} alt="Instagram Icon" />
              </div>
              <div className="px-1">
                <img className="h-8 w-7" src={Email} alt="Email Icon" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoSection;
