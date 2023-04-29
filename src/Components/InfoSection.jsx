import React, {useState} from 'react';
import Instagram from '../Images/instagram.svg';
import Email from '../Images/email.png';

const InfoSection = ({data}) => {
  const [subheading, setSubheading] = useState(data.subheading);
  const [heading, setHeading] = useState(data.heading);
  const [description, setDescription] = useState(data.description);

  return (
    <div className="p-8 lg:pt-16">
      <div className="flex justify-start sm:justify-center lg:justify-start">
        <h3 className="pt-4 text-xl font-bold text-primary">{subheading}</h3>
      </div>
      <div className="flex justify-center lg:justify-start">
        <h1 className="pt-2 text-4xl">{heading}</h1>
      </div>
      <div className="flex justify-center">
        <p className="py-4 text-sm max-w-lg">{description}</p>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <button className="px-4 py-2 font-bold rounded-3xl bg-primary text-light focus:outline-none">
          Book Now!
        </button>

        {/* ICONS */}
        <div className="flex justify-center">
          <div className="pl-4">
            <img className="h-8 w-7" src={Instagram} alt="Instagram Icon" />
          </div>
          <div className="px-1">
            <img className="h-8 w-7" src={Email} alt="Email Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
