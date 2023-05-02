import React from 'react';

const CardSection = (data) => {
  return (
    <div className="bg-secondary rounded-lg text-light flex flex-col w-64 h-fit lg:w-72 items-center m-4 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110">
      <div>
        <div className="rounded-full p-4">
          <img
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
            src={data.imageURL}
            alt={data.imageDesc}
          />
        </div>
      </div>
      <div className="p-4">
        <blockquote>
          <p className="text-lg lg:text-xl text-gray-900">{data.quote}</p>
        </blockquote>
        <div>
          <p className="text-xl lg:text-2xl font-medium p-4 flex justify-end">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
