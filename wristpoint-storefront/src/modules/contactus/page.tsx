"use client"
import React from 'react';
import contactusImage from '../../../public/contactus.avif';

const ContactUs = () => {
  return (
    <div className="background-image bg-gray-800 bg-opacity-10 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white bg-opacity-20 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact Us</h2>
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-bold text-white">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-bold text-white">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc123@gmail.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-bold text-white">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .background-image {
            background-image: url(${contactusImage.src});
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
