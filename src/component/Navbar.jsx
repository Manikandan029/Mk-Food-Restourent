import React from 'react';
import { Link } from 'react-router-dom';
import { IoFastFood } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { LuMailPlus } from "react-icons/lu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import '../index.css';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      {/* upper navbar */}
      <div className='flex items-center justify-between bg-gray-600 text-white px-4 py-2 md:py-4'>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <LuMailPlus color='white' className='mr-2' />
            <p className='text-white hidden md:block'>(+91)987-654-3210</p>
          </div>
          <div className='flex items-center ml-4'>
            <MdPhone color='white' className='mr-2' />
            <p className='text-white hidden md:block'>abc@gmail.com</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <AiFillTwitterCircle />
          <FaFacebook />
          <GrInstagram />
          <FaGithub />
        </div>
      </div>

      {/* lower navbar */}
      <div className='lower-navbar flex flex-col md:flex-row items-center md:items-start md:gap-32 px-4 py-3 bg-white border-t border-b border-gray-300 shadow-md'>
        <div className='lower-navbar mb-4 md:mb-0'>
          <Link to="/">
            <div className='flex gap-2 items-center'>
              <div className='icon ml-20'>
                <IoFastFood size={50} />
              </div>
              <div className='font-serif text-2xl mt-2 md:mt-0 md:text-xl'>
                Mk restorent
              </div>
            </div>
          </Link>
        </div>
        <div className='navbar flex flex-wrap gap-4 md:gap-20'>
          <Link className="hover:bg-gray-400 h-10 px-5 pt-2 rounded-2xl focus:bg-gray-400 mt-3 transform transition-transform duration-300 hover:translate-x-2" to='/'>Home</Link>
          <Link className="hover:bg-gray-400 h-10 px-5 pt-2 rounded-2xl focus:bg-gray-400 mt-3 transform transition-transform duration-300 hover:translate-x-2" to='/about'>About</Link>
          <Link className="hover:bg-gray-400 h-10 px-5 pt-2 rounded-2xl focus:bg-gray-400 mt-3 transform transition-transform duration-300 hover:translate-x-2" to='/menu'>Menu</Link>
          <Link className="hover:bg-gray-400 h-10 px-5 pt-2 rounded-2xl focus:bg-gray-400 mt-3 transform transition-transform duration-300 hover:translate-x-2" to='/blogs'>Blogs</Link>
          <Link className="hover:bg-gray-400 h-10 px-5 pt-2 rounded-2xl focus:bg-gray-400 mt-3 transform transition-transform duration-300 hover:translate-x-2" to='/contact'>Contact</Link>
          

        </div>
        
        <div>
          <Link to='/book'>  <button className="mt-3 px-5 py-2 rounded-2xl bg-white text-gray-800 hover:bg-gray-400 hover:text-gray-900"> 
            Book
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}