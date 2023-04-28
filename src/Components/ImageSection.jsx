import React from 'react';
import Woman from '../Images/woman.jpg';

const ImageSection = () => {
  return (
    <div className="p-8 lg:pt-16">
      <div className="flex justify-center">
        <img
          src={Woman}
          alt="Hero Image"
          className="absolute w-60 h-60 mt-6 ml-4 rounded-2xl object-cover"
        />
      </div>
      <div className="flex justify-center">
        <div className=" w-60 h-60 rounded-2xl mr-8 bg-primary"></div>
      </div>
    </div>
  );
};

export default ImageSection;
