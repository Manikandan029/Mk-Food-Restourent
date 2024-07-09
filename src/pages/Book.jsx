import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

const Book = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
        person: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(formData).every(field => field)) {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("access_key", "6c04c4fc-dc7f-4a52-bec2-fd0630f4624a");
            formDataToSubmit.append("date", formData.date);
            formDataToSubmit.append("time", formData.time);
            formDataToSubmit.append("name", formData.name);
            formDataToSubmit.append("phone", formData.phone);
            formDataToSubmit.append("person", formData.person);

            const object = Object.fromEntries(formDataToSubmit);
            const json = JSON.stringify(object);

            console.log("Form data to submit:", object); // Log the form data

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000); // Hide the popup after 5 seconds

                // Clear form after submission (optional)
                setFormData({
                    date: '',
                    time: '',
                    name: '',
                    phone: '',
                    person: ''
                });
            } else {
                console.error("Submission failed", res);
            }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            <div className="max-w-4xl w-full mx-auto p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-center">Book A Table</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">We consider all the drivers of change and give you the components you need to create a truly remarkable experience.</p>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-10">
                        <div className="flex flex-col md:flex-row justify-between md:space-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="date" className="text-gray-600 mb-1 font-bold">Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="time" className="text-gray-600 mb-1 font-bold">Time:</label>
                                <input
                                    type="time"
                                    id="time"
                                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between md:space-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="name" className="text-gray-600 mb-1 font-bold">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your Name"
                                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="phone" className="text-gray-600 mb-1 font-bold">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="xxx-xxx-xxxx"
                                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="person" className="text-gray-600 mb-1 font-bold">Total person:</label>
                            <select
                                id="person"
                                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.person}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="1 Person">1 Person</option>
                                <option value="2 Persons">2 Persons</option>
                                <option value="3 Persons">3 Persons</option>
                                <option value="4 Persons">4 Persons</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                                Book a Table
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {showSuccess && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/3 bg-black border-2 border-green-500 p-4 rounded-lg shadow-lg text-white z-50">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold">Success!</h2>
                        <button onClick={() => setShowSuccess(false)} className="text-white">
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                    <p className="mb-4">Your table has been booked successfully.</p>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-green-500 h-1 rounded-full animate-reduce-width"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Book;
