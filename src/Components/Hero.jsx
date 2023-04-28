import React from 'react';
import Instagram from '../Images/instagram.svg';
import Email from '../Images/email.png';
import Woman from '../Images/woman.jpg';

const Hero = () => {
  return (
    <div className="text-grey lg:flex lg:justify-center">
      <div className="p-8">
        <div className="flex justify-start sm:justify-center lg:justify-start">
          <h3 className="pt-4 text-xl font-bold text-primary">
            Discover Your Perfect Style
          </h3>
        </div>
        <div className="flex justify-center">
          <h1 className="pt-2 text-4xl">Expert Hair Care Tailored To You.</h1>
        </div>
        <div className="flex justify-center">
          <p className="py-4 text-sm ">
            Discover the artistry of Katie! A talented stylist with an eye for
            detail and a passion for creating unique, beautiful hairstyles that
            bring out your natural beauty!
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <button className="px-4 py-2 font-bold rounded-3xl bg-primary text-light">
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

      <div className="p-8">
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
    </div>
  );
};

export default Hero;
