"use client"
import React from "react"
import Image from "next/image"

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="flex justify-center items-center lg:w-1/4">
          <Image
            src={require("../../../public/Contact us-rafiki.svg")}
            height={300}
            width={300}
            quality={100}
            alt="team"
            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-80"
            unoptimized
          />
        </div>
        <div className="flex justify-center items-center lg:w-1/2 mb-8 m-4">
          <div className="background-image  bg-opacity-10 flex items-center justify-center w-full">
            <div className="w-full max-w-md bg-gray-300 shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4 text-center">
                Contact Us
              </h2>
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-bold text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    autoComplete="username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-bold text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    autoComplete="username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="abc123@gmail.com"
                    autoComplete="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-black"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
