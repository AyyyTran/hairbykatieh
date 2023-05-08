import React from 'react';
import Instagram from '../Images/instagram.svg';
import Email from '../Images/email.png';
import {Link} from 'react-scroll';

const InfoSection = (data) => {
  return (
    <>
      <div className="p-8 pt-16">
        <div className="flex justify-start sm:justify-center lg:justify-start">
          <h3 className="pt-4 text-2xl font-bold text-primary lg:text-3xl">
            {data.subheading}
          </h3>
        </div>
        <div className="flex justify-center lg:justify-start">
          <h1 className="pt-2 text-4xl max-w-lg lg:max-w-2xl lg:text-5xl">
            {data.heading}
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="py-4 text-lg max-w-lg lg:max-w-2xl lg:text-xl">
            {data.description}
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-start text-lg">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="w-32 py-2 font-bold rounded-3xl bg-primary text-light focus:outline-none transition ease-in-out hover:scale-105">
              Book Now!
            </button>
          </Link>
          {data.icons && (
            <div className="flex justify-center">
              <a
                href="https://instagram.com/hair.bykatieh?igshid=YmMyMTA2M2Y="
                target="_blank"
                className="pl-4 transition ease-in-out hover:scale-110 cursor-pointer "
              >
                <img className="h-8 w-7" src={Instagram} alt="Instagram Icon" />
              </a>
              <Link
                className="pl-4 transition ease-in-out hover:scale-110 cursor-pointer "
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img className="h-8 w-7" src={Email} alt="Email Icon" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoSection;
