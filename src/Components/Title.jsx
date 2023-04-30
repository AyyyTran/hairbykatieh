import React from 'react';

const Title = (data) => {
  return (
    <div className="text-4xl flex justify-center text-grey mt-16 mb-8">
      <p className="border-b-2 px-2 border-b-grey">{data.title}</p>
    </div>
  );
};

export default Title;
