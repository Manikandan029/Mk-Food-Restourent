import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

export default function Contact() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData(e.target);
        formDataToSubmit.append("access_key", "6c04c4fc-dc7f-4a52-bec2-fd0630f4624a");

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
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            console.error("Submission failed", res);
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center mt-0">
            <div className="max-w-4xl w-full mx-auto p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    We consider all the drivers of change and give you the components you need to create a truly remarkable experience.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-10">
                        <div className="flex flex-col md:flex-row justify-between md:space-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="name" className="text-gray-600 mb-1 font-bold">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your Name"
                                    className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    value={formData.name}
                                    onChange={handleChange}
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="text-gray-600 mb-1 font-bold">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    value={formData.email}
                                    onChange={handleChange}
                                    name="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between md:space-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="subject" className="text-gray-600 mb-1 font-bold">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="What's the subject?"
                                    className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    name="subject"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-gray-600 mb-1 font-bold">Message:</label>
                            <textarea
                                id="message"
                                placeholder="Write your message"
                                className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none w-full"
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                required
                            />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                                Send
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
                    <p className="mb-4">Your message has been sent successfully.</p>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-green-500 h-1 rounded-full animate-reduce-width"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
