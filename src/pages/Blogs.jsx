import React from "react";
import MainBlogs from '../data/MainBlogs';

export default function Blogs() {
    return (
        <div className="px-6 py-12 bg-gray-100">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Our Blogs & Articles</h1>
                <p className="text-lg text-gray-600">We consider all the drivers of change and give you the components you need to create meaningful changes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- mx-10 ">
                {
                    MainBlogs && MainBlogs.length > 0 ?
                    MainBlogs.map(blogItem => (
                        <div key={blogItem.id} className="bg-white p-6 rounded-lg shadow-md   transform transition-transform duration-300 hover:scale-105  m-5">
                            <img src={blogItem.image} alt={blogItem.heading} className="w-full h-40 object-cover rounded-t-lg mb-4  transform transition-transform duration-300 hover:scale-95" />
                            <p className="text-sm text-gray-500 mb-2">{blogItem.date}</p>
                            <h2 className="text-2xl font-semibold mb-4">{blogItem.heading}</h2>
                        </div>
                    )) :
                    (
                        <div className="col-span-full text-center text-xl text-gray-700">No Blogs Found!</div>
                    )
                }
            </div>
        </div>
    );
}
