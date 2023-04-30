import React from 'react';
import Instagram from '../Images/instagramWhite.png';
import Email from '../Images/emailWhiteThin.png';
import Phone from '../Images/phoneWhite.png';
import {Link} from 'react-scroll';

const ContactSection = (data) => {
  return (
    <div>
      <div className="bg-secondary rounded-xl text-light text-lg md:text-sm flex w-fit p-12">
        <div className="flex flex-col items-center flex-wrap">
          <a
            href="https://instagram.com/hair.bykatieh?igshid=YmMyMTA2M2Y="
            target="_blank"
            className="transition ease-in-out hover:scale-110 cursor-pointer "
          >
            <img
              className="h-8 w-8 transition ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
              src={Instagram}
              alt="Instagram Icon"
            />
          </a>
          <Link
            className="transition ease-in-out hover:scale-110 cursor-pointer "
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img className="h-8 w-7" src={Email} alt="Email Icon" />
          </Link>
          <Link
            className="transition ease-in-out hover:scale-110 cursor-pointer "
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              className="h-8 w-8 transition-transform ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
              src={Phone}
              alt="Phone Icon"
            />
          </Link>
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
