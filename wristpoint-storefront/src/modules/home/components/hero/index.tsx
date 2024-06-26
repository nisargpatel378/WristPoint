import React from "react"
import Image from "next/image"


const Hero = () => {
  return (
    <div>
      <section className="py-12" id="hero">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-gray-400 font-medium">
              Discover Our Extensive Collection
            </h1>
            <div className="flex gap-4">
              <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                WristPoint
              </h2>
              <Image
                className="emoji"
                src={require("../../../../../public/home page/emoji.svg")}
                alt=""
                height={50}
              />
            </div>
            <p>
              Explore a wide variety of watches for every occasion, from luxury
              brands to everyday wear. At WristPoint, we pride ourselves on
              offering something for everyone.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="/store"
                className="block py-2 px-4 text-center text-white font-medium bg-black duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Explore our collection
              </a>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <Image
              src={require("../../../../../public/home page/img1.avif")}
              className="md:rounded-tl-[108px] h-auto w-full"
              alt="home image"
              priority
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm text-gray-700 font-semibold">
            Trusted by the best companies
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            <Image
              src={require("../../../../../public/watch companies logo/timex.svg")}
              alt="timex logo"
              height={33}
            />
            <Image
              src={require("../../../../../public/watch companies logo/fastrack.svg")}
              alt="fastrack logo"
              height={33}
            />
            <Image
              src={require("../../../../../public/watch companies logo/sonata.svg")}
              alt="sonata logo"
              height={33}
            />
            <Image
              src={require("../../../../../public/watch companies logo/fossil.svg")}
              alt="fossil logo"
              className="w-auto"
              height={33}
              />
            <Image
              src={require("../../../../../public/watch companies logo/titan.svg")}
              alt="titan logo"
              height={33}
            />
          </div>
        </div>
      </section>


    </div>
  )
}

export default Hero
