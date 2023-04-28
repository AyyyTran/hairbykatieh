import React from 'react';

const Hero = () => {
  return (
    <div>
      <div>
        <h3>Discover Your Perfect Style</h3>
        <h1>Expert Hair Care Tailored To You.</h1>
        <p>
          Discover the artistry of Katie! A talented stylist with an eye for
          detail and a passion for creating unique, beautiful hairstyles that
          bring out your natural beauty!
        </p>
        <button>Book Now!</button>
        <div>{/* social media icons */}</div>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0 p-4 bg-gray-200 rounded-lg">
          <p>Some content here</p>
        </div>
        <img
          src="your-image-url-here"
          alt="Your image"
          className="block mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
