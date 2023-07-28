import React from 'react';

const ImageSection = (data) => {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-center">
          <img
            src={data.imageURL}
            alt={data.imageDesc}
            className="absolute w-60 h-60 lg:w-96 lg:h-96  mt-6 ml-4 rounded-2xl object-cover"
          />
        </div>
        <div className="flex justify-center">
          <div className=" w-60 h-60 lg:w-96 lg:h-96 rounded-2xl mr-8 bg-primary"></div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
