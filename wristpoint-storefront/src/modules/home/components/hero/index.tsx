// import { Github } from "@medusajs/icons"
// import { Button, Heading } from "@medusajs/ui"

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
              className="md:rounded-tl-[108px] h-100 w-full"
              alt="home image"
              // quality={100}
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
              // fill
            />
            <Image
              src={require("../../../../../public/watch companies logo/fastrack.svg")}
              alt="fastrack logo"
              height={33}
              // fill
            />
            <Image
              src={require("../../../../../public/watch companies logo/sonata.svg")}
              alt="sonata logo"
              height={33}
              // fill
            />
            <Image
              src={require("../../../../../public/watch companies logo/fossil.svg")}
              alt="fossil logo"
              height={30}
              // fill
            />
            <Image
              src={require("../../../../../public/watch companies logo/titan.svg")}
              alt="titan logo"
              height={30}
              // fill
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="123"
              height="27"
              fill="none"
            >
              <path
                fill="#4B5563"
                d="M46.72 6.111h-3.102v13.951h8.927v-2.053H46.72V6.111ZM63.495 12.03c-.396-.465-.957-.83-1.686-1.096a6.372 6.372 0 0 0-2.198-.398c-.953 0-1.825.13-2.616.388-.791.26-1.47.615-2.036 1.067a5 5 0 0 0-1.322 1.564 3.91 3.91 0 0 0-.472 1.863c0 .665.157 1.29.472 1.874a5.033 5.033 0 0 0 1.322 1.554c.566.452 1.244.808 2.036 1.067.79.259 1.663.388 2.616.388.737 0 1.47-.133 2.198-.398.729-.266 1.29-.631 1.686-1.096v1.255h2.94v-9.287h-2.94v1.255Zm-.27 4.524c-.18.36-.431.671-.755.937a3.79 3.79 0 0 1-1.173.638c-.459.16-.967.239-1.524.239-.558 0-1.061-.08-1.51-.24a3.818 3.818 0 0 1-1.16-.637 2.708 2.708 0 0 1-.742-.937 2.604 2.604 0 0 1-.256-1.136c0-.398.085-.777.256-1.136.17-.358.418-.67.742-.936a3.82 3.82 0 0 1 1.16-.638c.449-.16.952-.24 1.51-.24.557 0 1.065.08 1.524.24.458.16.85.372 1.173.638.324.266.575.578.755.936.18.36.27.738.27 1.136 0 .399-.09.778-.27 1.136ZM87.39 12.03c-.395-.465-.957-.83-1.685-1.096a6.372 6.372 0 0 0-2.198-.398c-.953 0-1.825.13-2.616.388-.791.26-1.47.615-2.036 1.067a5 5 0 0 0-1.322 1.564 3.91 3.91 0 0 0-.472 1.863c0 .665.157 1.29.472 1.874a5.033 5.033 0 0 0 1.322 1.554c.566.452 1.245.808 2.036 1.067.79.259 1.663.388 2.616.388.737 0 1.47-.133 2.198-.398.728-.266 1.29-.631 1.686-1.096v1.255h2.94v-9.287h-2.94v1.255Zm-.269 4.524c-.18.36-.431.671-.755.937a3.79 3.79 0 0 1-1.173.638c-.459.16-.967.239-1.524.239-.558 0-1.061-.08-1.51-.24a3.818 3.818 0 0 1-1.16-.637 2.708 2.708 0 0 1-.742-.937A2.604 2.604 0 0 1 80 15.418c0-.398.085-.777.256-1.136.17-.358.418-.67.742-.936a3.82 3.82 0 0 1 1.16-.638c.449-.16.952-.24 1.51-.24.557 0 1.065.08 1.524.24.458.16.85.372 1.173.638.324.266.575.578.755.936.18.36.27.738.27 1.136 0 .399-.09.778-.27 1.136ZM122.58 6.111h-2.939v13.951h2.939V6.112ZM68.754 20.062h2.94v-7.15h5.043v-2.137h-7.983v9.287ZM102.116 10.775l-3.695 7.112-3.694-7.112h-2.978l4.825 9.287h3.695l4.825-9.287h-2.978ZM111.506 10.536c-3.6 0-6.449 2.186-6.449 4.883 0 2.98 2.758 4.882 6.826 4.882 2.277 0 3.731-.643 5.507-2.044l-1.986-1.136c-.002.001-1.499 1.455-3.736 1.455-2.6 0-3.694-1.55-3.694-2.35h9.753c.512-3.068-2.218-5.69-6.221-5.69Zm-3.524 4.075c.022-.178.361-2.35 3.501-2.35 3.14 0 3.522 2.171 3.544 2.35h-7.045ZM34.671 6.002c-.004-.012-.014-.023-.02-.035-.01-.021-.02-.044-.035-.064-.01-.013-.026-.024-.039-.036-.016-.017-.03-.034-.05-.049-.016-.011-.036-.02-.054-.03-.02-.012-.039-.026-.062-.036l-6.715-2.857a.734.734 0 0 0-.559 0l-6.714 2.857c-.023.01-.042.023-.062.035-.018.01-.039.02-.055.031-.02.015-.034.032-.05.048-.012.013-.027.024-.038.037-.016.02-.025.042-.036.064-.006.012-.015.023-.02.035a.315.315 0 0 0-.02.108v5.425l-5.595 2.38V3.303a.317.317 0 0 0-.019-.108c-.004-.012-.014-.023-.02-.035-.01-.022-.02-.044-.035-.064-.011-.013-.026-.024-.039-.037-.016-.016-.03-.033-.05-.048-.016-.012-.036-.02-.054-.03-.02-.012-.04-.026-.062-.036L7.552.087a.734.734 0 0 0-.558 0L.28 2.944c-.023.01-.042.024-.062.035C.2 2.99.179 3 .163 3.01c-.02.015-.033.032-.05.048-.012.013-.027.024-.038.037-.016.02-.025.043-.036.064-.006.012-.015.023-.02.035A.315.315 0 0 0 0 3.302v16.993c0 .148.107.285.28.359l13.43 5.713c.029.012.06.02.092.028.014.004.028.01.043.013a.748.748 0 0 0 .287 0c.013-.003.025-.008.038-.012.033-.008.066-.016.097-.03l13.43-5.712c.173-.074.28-.21.28-.359V14.87l6.434-2.737c.173-.074.28-.21.28-.359V6.11a.326.326 0 0 0-.02-.108ZM13.987 19.82l-5.585-2.335 5.865-2.495 6.435-2.738 5.59 2.377-4.101 1.73-8.204 3.46Zm12.87-10.614v4.71l-2.35-1-3.245-1.38v-4.71l2.35.999 3.245 1.38Zm.56-5.475 5.593 2.38-5.593 2.379-5.593-2.38 5.593-2.38ZM10.183 15.773l-2.35 1V6.397l3.246-1.381 2.35-1v10.375l-3.246 1.38ZM7.273.923l5.593 2.38-5.593 2.379-5.593-2.38L7.273.922ZM1.118 4.017l2.35 1 3.246 1.38V17.49c0 .016.006.03.008.046.004.02.004.041.012.06v.002c.006.016.018.03.026.046.01.018.017.036.03.052v.001c.012.015.028.027.042.04.015.015.028.03.046.044l.002.001c.016.012.035.02.053.03.02.012.038.025.06.035h.003l.002.002 6.43 2.689v4.756l-12.31-5.236V4.017Zm25.74 16.04-12.31 5.236v-4.757l9.116-3.846 3.193-1.347v4.713Zm6.714-8.521-5.596 2.38v-4.71l3.246-1.381 2.35-1v4.71Z"
              />
            </svg> */}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Hero