import React, { useState } from 'react';
import MenuList from '../data/MenuItems';

const MenuComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuList = MenuList.filter((menuItem) => {
    if (selectedCategory === 'All') {
      return true; // Show all items if 'All' is selected
    } else {
      return menuItem.category === selectedCategory;
    }
  });

  return (
    <div className="container mx-auto py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-700 mb-4">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`border border-gray-400 py-2 px-4 rounded-full hover:bg-red-400 focus:bg-red-400 ${
              selectedCategory === 'All' ? 'bg-red-400 text-white' : ''
            }`}
            onClick={() => handleCategorySelect('All')}
          >
            All
          </button>
          <button
            className={`border border-gray-400 py-2 px-4 rounded-full hover:bg-red-400 focus:bg-red-400 ${
              selectedCategory === 'Main Dishes' ? 'bg-red-400 text-white' : ''
            }`}
            onClick={() => handleCategorySelect('Main Dishes')}
          >
            Main Dishes
          </button>
          <button
            className={`border border-gray-400 py-2 px-4 rounded-full hover:bg-red-400 focus:bg-red-400 ${
              selectedCategory === 'Breakfast' ? 'bg-red-400 text-white' : ''
            }`}
            onClick={() => handleCategorySelect('Breakfast')}
          >
            Breakfast
          </button>
          <button
            className={`border border-gray-400 py-2 px-4 rounded-full hover:bg-red-400 focus:bg-red-400 ${
              selectedCategory === 'Drinks' ? 'bg-red-400 text-white' : ''
            }`}
            onClick={() => handleCategorySelect('Drinks')}
          >
            Drinks
          </button>
          <button
            className={`border border-gray-400 py-2 px-4 rounded-full hover:bg-red-400 focus:bg-red-400 ${
              selectedCategory === 'Dessert' ? 'bg-red-400 text-white' : ''
            }`}
            onClick={() => handleCategorySelect('Dessert')}
          >
            Dessert
          </button>
        </div>
      </div>
            {/* Menu items */}
            
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 my-10">
        {filteredMenuList && filteredMenuList.length > 0 ? (
          filteredMenuList.map((menuItem) => (
            <div key={menuItem.id} className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <img src={menuItem.image} alt={menuItem.name} className="w-full h-48 object-cover rounded-t-lg mb-2 transform transition-transform duration-300 hover:scale-95" />
              <p className="text-gray-600 text-center mt-1 mb-2 text-red-500 text-2xl">${menuItem.price}</p>
              <h2 className="text-lg font-semibold mb-2 text-center">{menuItem.name}</h2>
              <p className="text-gray-700 text-center">{menuItem.detail}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">Not Found!</div>
        )}
      </div>
        {/* order apps */}


        <div className="flex justify-between mx-20 my-20">
        {/* First div */}
        <div className="flex-1 p-4 ml-10">
          <div>
            <h1 className="text-3xl font-bold mb-4">You can order through apps</h1>
            <p className="text-gray-700 text-star w-60">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
        </div>

        {/* Second div */}
        <div className="flex-1 p-4 -ml-30">
          <ul className="grid grid-cols-3 gap-4">
            {/* First three items */}
            <li className="menu-item border-2 border-blue-500 rounded-lg p-4 text-center font-semibold text-blue-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              Uber <span className="text-red-600">Eats</span>
            </li>
            <li className="menu-item border-2 border-green-500 rounded-lg p-4 text-center font-semibold text-green-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              GRUBHUB
            </li>
            <li className="menu-item border-2 border-purple-500 rounded-lg p-4 text-center font-semibold text-purple-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              Postmates
            </li>

            {/* Second three items */}
            <li className="menu-item border-2 border-yellow-500 rounded-lg p-4 text-center font-semibold text-yellow-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              Doordash
            </li>
            <li className="menu-item border-2 border-red-500 rounded-lg p-4 text-center font-semibold text-red-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              Food panda
            </li>
            <li className="menu-item border-2 border-indigo-500 rounded-lg p-4 text-center font-semibold text-indigo-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              Deliveroo
            </li>

            {/* Third three items */}
            <li className="menu-item border-2 border-purple-500 rounded-lg p-4 text-center font-semibold text-purple-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              Instacart
            </li>
            <li className="menu-item border-2 border-green-500 rounded-lg p-4 text-center font-semibold text-green-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              JUST EAT
            </li>
            <li className="menu-item border-2 border-pink-500 rounded-lg p-4 text-center font-semibold text-pink-500 text-lg bg-gray-100 transform rotate-6 hover:scale-105 flex justify-center items-start">
              DiDi Food
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
};

export default MenuComponent;
