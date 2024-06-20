import React from "react"

// import { clx } from "@medusajs/ui"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
// import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
// import RefinementList from "@modules/store/components/refinement-list"
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
// import PaginatedProducts from "@modules/store/templates/paginated-products"

import Script from "next/script"
import Image from "next/image"

const page = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <div className="flex gap-4 items-center justify-center">
                <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
                  OUR TEAM : TECH CREW
                </h1>
                <Image
                  className="emoji mb-4"
                  src={require("../../../../../../wristpoint-storefront/public/home page/emoji.svg")}
                  alt=""
                  height={50}
                  width={50}
                />
              </div>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                "Crafting digital dreams with code wizardry, weaving innovation
                into every pixel. Where passion meets precision, we engineer the
                future of the web, one line at a time."
              </p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="transition ease-in duration-300 transform hover:scale-105 p-4 lg:w-1/6 h-1/2 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/nisarg.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Nisarg Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="https://www.linkedin.com/in/nisargpatel378"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/nisarg_patel_378?igsh=MXRnbXFmdjkxa2JnMA=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/nisargpatel378"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/6 md:w-1/2">
                <div className="transition ease-in duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/rohan.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Rohan Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="https://www.linkedin.com/in/rohan-patel-52aa7023b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/rohan._.454?igsh=MTZ4MHdtZmN3Zm5ndg%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/rohan-0405"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/6 md:w-1/2">
                <div className="transition ease-in duration-300 transform hover:scale-105 h-full w-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/siddh.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Siddh Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="https://www.linkedin.com/in/nisargpatel378"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/._siddh.chaudhari._07?utm_source=qr&igsh=N2V2OTB6MzIxcmJm=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/nisargpatel378"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/6 md:w-1/2">
                <div className="transition ease-in duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/swet.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Swet Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="https://www.linkedin.com/in/swet-patel-96152a243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/swet_22_02?igsh=OTdzZThxcmdyZWdh"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/swet-22"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 lg:w-1/6 h-1/2 md:w-1/2">
                <div className="transition ease-in duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/meet.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Meet Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="https://www.linkedin.com/in/meet-patel-9852b3243"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/meetpatell_06?igsh=amg1cmM1bHh4OXEz&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/Meetpatel0603"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/6 md:w-1/2">
                <div className="transition ease-in duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/dhrupal.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Dhrupal Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Frontend Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="http://linkedin.com/in/dhrupal-patel-96133a311"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/dhrupalpatell_24?igsh=N3FzNGc3bGR4enRk&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/Dhrupal-5335"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/6 md:w-1/2">
                <div className="transition ease-in duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/mansi.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Mansi Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Frontend Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="https://www.linkedin.com/in/mansi-patel-791a09285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/mansii_.2306?igsh=MWV6a2Nuano1eDEwMA=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/mansipatel2306"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/6 md:w-1/2">
                <div className="transition ease-in duration-300 transform hover:scale-105 h-full flex flex-col items-center text-center">
                  <Image
                    src={require("../../../../../../wristpoint-storefront/public/aboutus-images/anchal.jpg")}
                    height={100}
                    width={100}
                    quality={100}
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 h-60"
                    unoptimized
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Anchal Patel
                    </h2>
                    <h3 className="text-gray-500 mb-3">Frontend Developer</h3>
                    <span className="inline-flex space-x-5">
                      <a
                        href="https://www.linkedin.com/in/anchal-patel-03b117285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/_.anchall._1110?igsh=MzNlNGNkZWQ4Mg=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                      <a
                        href="https://github.com/anchalpatel11"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-lg"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Script
          src="https://kit.fontawesome.com/5f3aac69de.js"
          crossOrigin="anonymous"
        ></Script>
      </div>
    </>
  )
}

export default page
