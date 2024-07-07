// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IoFastFood } from 'react-icons/io5';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaArrowRight,FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import FoodImage1 from '../assets/foods/Food1.avif';
import FoodImage2 from '../assets/foods/Food2.avif';
import FoodImage3 from '../assets/foods/Food3.avif';
import FoodImage4 from '../assets/foods/Food4.avif';
import '../index.css'; // Import your Tailwind CSS styles

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white">
      <div className="flex flex-wrap text-center px-16 py-16">
        {/* First column */}
        <div className="w-full md:w-1/3 p-4">
          <Link to='/'>
            <div className='flex gap-2 items-center justify-center md:justify-start'>
              <div className='icon'>
                <IoFastFood size={50} />
              </div>
              <div className='font-serif text-2xl mt-2 md:mt-0 md:text-xl'>
                Mk Restorent
              </div>
            </div>
          </Link>
          <p className="w-72 mb-5 mt-5 mx-auto md:mx-0 text-left">
            In the new era of technology we look in the future with certainty and pride for our company.
          </p>
          <div className='flex justify-center md:justify-start items-center gap-4 text-white-800 size-9'>
           
          <Link to='https://www.linkedin.com/in/manikandan-m-b34547256/'> <FaLinkedin   className='border rounded-3xl bg-red-400 text-4xl p-1 '/></Link>
          <Link to='https://github.com/Manikandan029'> <FaGithub   className='border rounded-3xl bg-red-400 text-4xl p-1'/></Link>
          <Link to='https://www.instagram.com/___.manikandan.__/'> <GrInstagram   className='border rounded-3xl bg-red-400 text-4xl p-1'/></Link>
          
            <AiFillTwitterCircle className='border rounded-3xl bg-red-400 text-4xl p-1' />
            <FaFacebook  className='border rounded-3xl bg-red-400 text-4xl p-1' />
            
          </div>
        </div>

        {/* Second column */}
        <div className="w-full md:w-1/3 p-4">
          <div className="flex justify-center md:justify-start">
            <div className="text-left">
              <h1 className="text-xl font-bold">Pages</h1>
              <div className="mt-4 space-y-2">
                <Link to="/" className="group block transition-all hover:translate-x-1">
                  <p className="flex items-center">
                    <FaArrowRight className="mt-1" />
                    <span className="ml-1">Home</span>
                  </p>
                </Link>
                <Link to="/about" className="group block transition-all hover:translate-x-1">
                  <p className="flex items-center">
                    <FaArrowRight className="mt-1" />
                    <span className="ml-1">About</span>
                  </p>
                </Link>
                <Link to="/menu" className="group block transition-all hover:translate-x-1">
                  <p className="flex items-center">
                    <FaArrowRight className="mt-1" />
                    <span className="ml-1">Menu</span>
                  </p>
                </Link>
                <Link to="/blogs" className="group block transition-all hover:translate-x-1">
                  <p className="flex items-center">
                    <FaArrowRight className="mt-1" />
                    <span className="ml-1">Blogs</span>
                  </p>
                </Link>
                <Link to="/contact" className="group block transition-all hover:translate-x-1">
                  <p className="flex items-center">
                    <FaArrowRight className="mt-1" />
                    <span className="ml-1">Contact</span>
                  </p>
                </Link>
                <Link to="/book" className="group block transition-all hover:translate-x-1">
                  <p className="flex items-center">
                    <FaArrowRight className="mt-1" />
                    <span className="ml-1">Book</span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="ml-10 text-left">
              <h1 className="text-xl font-bold">Utility Pages</h1>
              <div className="mt-4 space-y-2">
                <p>Start Here</p>
                <p>Styleguide</p>
                <p>Password Protected</p>
                <p>404 Not Found</p>
                <p>Licenses</p>
                <p>Changelog</p>
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="w-full md:w-1/3 p-4">
          <div className="grid grid-cols-2 gap-4">
            <img src={FoodImage1} alt="Food 1" className="w-full h-40 object-cover border" />
            <img src={FoodImage2} alt="Food 2" className="w-full h-40 object-cover border" />
            <img src={FoodImage3} alt="Food 3" className="w-full h-40 object-cover border" />
            <img src={FoodImage4} alt="Food 4" className="w-full h-40 object-cover border" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <p className='text-center'>
          Copyright © 2024 <b className='text-red-500 text-2xl'>MANIKANDAN M</b>  All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
