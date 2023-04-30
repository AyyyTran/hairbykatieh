import React from 'react';
import ContactSection from '../Components/ContactSection';
import ContactData from '../Data/ContactData';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <>
      <div className="bg-secondary text-light flex flex-col md:flex-row items-center justify-center">
        <Link
          className="px-16 pt-8 pb-4 w-50 text-3xl font-bold text-white hover:cursor-pointer"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          hair.bykatieh
        </Link>
        <ContactSection
          instagram={ContactData.instagram}
          email={ContactData.email}
          phone={ContactData.phone}
        />
      </div>
      <div className="bg-secondary text-light flex justify-center py-4 text-xs">
        Copyright © 2023 Hair.byKatieH. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
