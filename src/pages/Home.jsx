import React,{useState} from 'react';
import heroImage from '../assets/hero.jpg';
import Menu from '../data/data'; 
import Image2 from '../assets/image2.jpg'
import Event from '../data/Events';
import cheffImage from '../assets/cheff-cook.jpg'
import FoodImage1 from '../assets/cooking1.jpg'
import FoodImage2 from '../assets/cooking2.jpg'
import { FaClock } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import Customer from '../data/customer';
import Blogs from '../data/blog';




 export default function Home () {




  return (
    <>
    {/* hero section */}
          <div
        className="relative bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`, 
          height: '600px',
          width: '100%',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center mr-10">
          <div className="w-1/2 h-full"></div> {/* Empty div to take up the first half */}
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="text-center bg-opacity-50 text-black">
              <h1 className="text-5xl font-bold mb-4">Best food for <br/> your taste</h1>
              <p className="mb-8 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias!</p>
              <div className="space-x-4">
                <button className="text-xl border p-3 rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transition-transform transform hover:scale-105">
                  Book a Table
                </button>
                <button className="text-xl border p-3 rounded-full font-semibold bg-white text-gray-800 hover:bg-gray-200 hover:shadow-lg transition-transform transform hover:scale-105">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




        {/*Menu section */}
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Browse Our Menu</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-4">
            {Menu && Menu.length > 0 ? (
              Menu.map((menuItem) => (
                <div
                  key={menuItem.id}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:border hover:border-gray-300 hover:shadow-lg"
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                >
                  <img src={menuItem.icon} alt={menuItem.name} className="w-20 h-20 mb-4" />
                  <h2 className="text-lg font-semibold text-center">{menuItem.name}</h2>
                  <p className="text-sm text-gray-600 mt-2 text-center">{menuItem.details}</p>
                  <p className='text-red-600 mt-1'>{menuItem.text}</p>
                </div>
              ))
            ) : (
              <div className="text-center">No menu items found!</div>
            )}
          </div>
        </div>


      {/* about section */}
      <div className='m-20 flex flex-wrap items-center bg-teal'>
            <div className='w-full md:w-1/2 pr-0 md:pr-12 mb-6 md:mb-0'>
              <img src={Image2} alt="" className='rounded-lg shadow-lg' style={{ maxWidth: '100%' }} />
            </div>
            
            <div className='w-full md:w-1/2 pl-0 md:pl-12 '>
              <h1 className='text-3xl font-bold mb-4 '>We provide healthy <br/>food for your family.</h1>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
              </p>
              <button className='border p-2.5 rounded-full font-serif font-semibold mt-4'> More about us</button>
            </div>
      </div>

          {/* services section */}
        <div className="container mx-auto px-2  max-w-screen-xl mr-40">
            <h1 className="text-3xl font-bold mb-4 text-center">We also offer unique <br/>services for your events</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10'>
                {
                  Event && Event.length > 0 ?
                    Event.map(EventsItems => (
                      <div key={EventsItems.id} className='bg-gray-100 rounded-lg shadow-md text-center flex-shrink-0 gap-20 mb-6 mx-4 lg:mx-0 transform transition-transform hover:scale-105'>
                        <img src={EventsItems.image} className='h-96 w-auto object-cover rounded-t-lg mb-2 mx-auto' alt={EventsItems.name} style={{ maxHeight: '240px' }} />
                        <div className="p-3">
                          <h2 className='text-lg font-bold mb-2'>{EventsItems.name}</h2>
                          <p className='text-gray-700 text-sm mb-3 max-w-3'>{EventsItems.details}</p>
                        </div>
                      </div>
                    ))
                    :
                    <div className="text-red-500 text-center w-full">Not Found!</div>
                }
              </div>    
       </div>

      {/* content section */}
      <div className='content flex items-center justify-center gap-3 mx-4 md:mx-40 mt-20'>
            <div className='w-1/3'>
              <img src={cheffImage} alt="Chef" className='rounded-lg shadow-lg h-auto w-full ' style={{ maxHeight: '350px' }} />
            </div>

            <div className='w-1/3 flex flex-col items-center justify-center gap-2 mt-30'>
              <img src={FoodImage1} alt="Food 1" className='rounded-lg shadow-lg h-64 w-auto object-cover' style={{ maxHeight: '200px' }} />
              <img src={FoodImage2} alt="Food 2" className='rounded-lg shadow-lg h-64 w-auto object-cover mt-2' style={{ maxHeight: '200px' }} />
            </div>

            <div className='w-1/3  rounded-lg  p-4'>
              <h1 className='text-3xl font-bold mb-4 text-center'>Fastest Food<br/> Delivery in City</h1>
              <p className='text-gray-700 mb-4 text-center'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center'>
                  <i className='text-2xl text-green-500'><FaClock /></i>
                  <p className='ml-2'>Delivery within 30 minutes</p>
                </div>
                <div className='flex items-center'>
                  <i className='text-2xl text-blue-500'><BiSolidOffer /></i>
                  <p className='ml-2'>Best offer & Prices</p>
                </div>
                <div className='flex items-center'>
                  <i className='text-2xl text-yellow-500'><HiShoppingCart /></i>
                  <p className='ml-2'>Online service available</p>
                </div>
              </div>
            </div>
        </div>


      {/* customer Reviews */}

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

        {/* Blog Section */}
        <div className='Blog-section py-8 px-4 md:px-10 lg:px-20'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Our Blog & Articles</h1>

            <div className='flex flex-wrap gap-6'>
              {/* First card on the left */}
              <div className='blog-list bg-white rounded-lg shadow-md overflow-hidden flex-1 transform transition-transform duration-300 hover:scale-105 '>
                <img src={Blogs[0].image} alt={Blogs[0].heading} className='w-full h-48 object-cover' />
                <div className='p-4'>
                  <p className='text-gray-500'>{Blogs[0].date}</p>
                  <h2 className='text-xl font-semibold mt-2'>{Blogs[0].heading}</h2>
                  <p className='text-gray-700 mt-2'>{Blogs[0].excerpt}</p>
                  {Blogs[0].content && <p className='text-gray-700 mt-2'>{Blogs[0].content}</p>}
                  {/* Add Lorem Ipsum paragraph here */}
                  <p className='text-gray-700 mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolorem iste, repellat suscipit quos explicabo veniam deleniti error, possimus voluptas iure, velit repellendus dolorum quae enim ratione quam nam fuga dolores natus voluptates! Dolores non minus, iusto odit voluptas, possimus ducimus corrupti voluptatem vero, minima assumenda alias blanditiis enim. Iusto possimus nihil reiciendis optio officiis voluptatum provident vitae corrupti consectetur facilis. Sapiente doloribus rem in, nostrum sit corporis, aperiam laudantium suscipit atque facere saepe laborum, velit tempora accusantium veritatis animi mollitia voluptatem? Unde nisi, dolore quas omnis repellat corrupti aperiam quis perferendis laborum id libero, nulla odit reiciendis, iusto voluptatibus!
                  </p>
                </div>
              </div>

              {/* Right side grid for remaining cards */}
              <div className='grid grid-cols-2 gap-6 flex-1  '>
                {Blogs.slice(1).map((blog) => (
                  <div key={blog.id} className='blog-list bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                    <img src={blog.image} alt={blog.heading} className='w-full h-36 object-cover' />
                    <div className='p-4'>
                      <p className='text-gray-500'>{blog.date}</p>
                      <h2 className='text-lg font-semibold mt-2'>{blog.heading}</h2>
                      <p className='text-gray-700 mt-2'>{blog.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>





    </>
  );
};
