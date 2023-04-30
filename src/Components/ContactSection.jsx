import React from 'react';
import Instagram from '../Images/instagramWhite.png';
import Email from '../Images/emailWhiteThin.png';
import Phone from '../Images/phoneWhite.png';

const ContactSection = (data) => {
  return (
    <div>
      <div className="bg-secondary rounded-xl text-light text-sm flex w-fit p-4">
        <div className="flex flex-col items-center">
          <div className="">
            <img className="h-8 w-8" src={Instagram} alt="Instagram Icon" />
          </div>
          <div className="">
            <img className="h-8 w-7" src={Email} alt="Email Icon" />
          </div>
          <div className="">
            <img className="h-8 w-8" src={Phone} alt="Phone Icon" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="h-8 pl-4 flex items-center">{data.instagram}</div>
          <div className="h-8 pl-4 flex items-center">{data.email}</div>
          <div className="h-8 pl-4  flex items-center">{data.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
