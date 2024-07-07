import React, { useRef, useState, useEffect } from "react";
import Image2 from '../assets/image2.jpg';
import VideoFile from '../assets/vedio.mp4';
import { FaPlay, FaPause } from 'react-icons/fa';
import  CheffImage from '../assets/cheff-cook2.avif'
import Customer from '../data/customer';


const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Initially not playing

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <div className='m-20 mt-8 flex flex-wrap items-center'>
        <div className='w-full md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0'>
          <img src={Image2} alt="" className='rounded-lg shadow-lg' style={{ maxWidth: '100%' }} />
        </div>

        <div className='w-full md:w-1/2 pl-0 md:pl-12'>
          <h1 className='text-3xl font-bold mb-4'>We provide healthy <br />food for your family.</h1>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p className='text-gray-700 leading-relaxed mb-4'>
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </div>

      <div className="video-container mx-14 my-14 relative">
        <video 
          ref={videoRef} 
          className={`w-full rounded-lg shadow-lg ${!isPlaying ? 'filter blur-sm brightness-75' : ''}`} // Adjusted blur and brightness
          onEnded={handleEnded}
          controls={false}  // Disable default controls
        >
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center ${!isPlaying ? 'block' : 'hidden'}`} // Initially shown, hidden when playing
        >
          <button 
            onClick={handlePlayPause}
            className="bg-white text-red-500 px-4 py-4 rounded-full opacity-90 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            style={{ fontSize: '2rem' }} // Increased button size
          >
            <FaPlay />
          </button>
          <p className="text-white text-center mt-4 text-3xl">Feel the authentic & <br/>original taste from us</p> {/* Increased text size */}
        </div>
        <div 
          className={`absolute bottom-4 left-4 ${isPlaying ? 'block' : 'hidden'}`} // Initially hidden, shown when playing
        >
          <button 
            onClick={handlePlayPause}
            className="bg-white text-red-500 px-4 py-4 rounded-full opacity-90 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            style={{ fontSize: '1.5rem' }} // Reduced button size
          >
            <FaPause />
          </button>
            </div>
        </div>

            <div className="flex flex-wrap items-center justify-center mx-auto max-w-6xl mt-20 mb-20">
            {/* Left Side */}
            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0">
                <h1 className="text-5xl font-serif mb-4">A little information <br/>for our valuable guests</h1>
                <p className="text-gray-700 leading-relaxed mb-4">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                
                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-4">
                <div className="p-4 text-center border border-gray-300 rounded-lg">
                    <span className="text-6xl font-bold block">3</span>
                    <p className="text-gray-600">Locations</p>
                </div>
                <div className="p-4 text-center border border-gray-300 rounded-lg">
                    <span className="text-6xl font-bold block">1995</span>
                    <p className="text-gray-600">Founded</p>
                </div>
                <div className="p-4 text-center border border-gray-300 rounded-lg">
                    <span className="text-6xl font-bold block">65+</span>
                    <p className="text-gray-600">Staff Members</p>
                </div>
                <div className="p-4 text-center border border-gray-300 rounded-lg">
                    <span className="text-6xl font-bold block">100%</span>
                    <p className="text-gray-600">Satisfied Customers</p>
                </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 pl-0 md:pl-12">
                <img src={CheffImage} alt="Chef" className="rounded-lg shadow-lg max-w-full h-screen" style={{ maxWidth: '100%' }} />
            </div>
            </div>      
      
        <div className='Customer-details mt-20 mx-4 md:mx-10 lg:mx-20 my-8'>
        <h1 className='text-3xl font-bold mb-6 text-center'>What our customers say</h1>

        {Customer && Customer.length > 0 ? (
          <div className='flex flex-wrap justify-center -mx-4'>
            {Customer.map(CustomerDetails => (

              <div key={CustomerDetails.id} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-6'>

                <div className='Customer-details border p-6 rounded-lg shadow-md h-full bg-orange-100 transform transition-transform duration-300 hover:scale-105'>

                  <h2 className='text-xl font-semibold mb-2'>{CustomerDetails.heading}</h2>

                  <p className='mb-4'>{CustomerDetails.feadback}</p>
                  <div className='flex items-center'>

                    <div className='w-16 h-16 mr-4'>

                      <img src={CustomerDetails.image} alt="" className='rounded-full object-cover w-full h-full' />
                    </div>
                    <div>
                      <p className='font-bold'>{CustomerDetails.name}</p>
                      <p className='text-gray-600'>{CustomerDetails.place}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center text-red-500'>Not found!</div>
        )}
      </div>

    </div>
  );
}

export default About;
