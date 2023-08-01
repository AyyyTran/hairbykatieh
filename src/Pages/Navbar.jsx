import React from 'react';
import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between px-4 text-lg lg:text-xl w-full max-w-full bg-secondary text-light h-14 lg:h-20">
      <Link
        className="w-40 text-3xl font-bold text-white hover:cursor-pointer "
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        hair.bykatieh
      </Link>
      <ul className="hidden lg:flex lg:items-center  ">
        <li className="p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 ">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110">
          <Link
            to="location"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Location
          </Link>
        </li>
        <li className="p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 ">
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Reviews
          </Link>
        </li>
        <li className="p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 ">
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li className="p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 ">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
        </li>
      </ul>
      <ul className="hidden lg:flex lg:items-center ">
        <li className="px-4 py-2 font-bold rounded-3xl hover:cursor-pointer  bg-primary hover:bg-hover focus:outline-none focus:shadow-outline">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="hover:cursor-pointer lg:hidden" onClick={handleNav}>
        <AiOutlineMenu size={40} />
      </div>
      {/* 303036 */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 h-fit pb-4 w-full z-50 bg-secondary ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        {/* MOBILE MENU */}
        <div className="flex items-center px-4 pt-4 ">
          <Link
            className="w-full text-3xl font-bold hover:cursor-pointer  text-text-base"
            to="hero"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            onClick={handleNav}
          >
            hair.bykatieh
          </Link>
          <div className="block hover:cursor-pointer  " onClick={handleNav}>
            <AiOutlineClose size={40} />
          </div>
        </div>
        <ul className="uppercase">
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110">
            <Link
              to="location"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Location
            </Link>
          </li>
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Testimonials
            </Link>
          </li>
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Gallery
            </Link>
          </li>
          <li className="flex justify-center p-4 hover:cursor-pointer hover:-translate-y-1 hover:scale-110">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Services
            </Link>
          </li>
          {/* className="px-4 py-2 font-bold rounded-3xl hover:cursor-pointer  bg-primary hover:bg-hover focus:outline-none focus:shadow-outline" */}
          <li className="flex justify-center py-2 mx-2 font-bold rounded-3xl hover:cursor-pointer  bg-primary hover:bg-hover focus:outline-none focus:shadow-outline">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={handleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
