import React from 'react'
import bannerImage from "../../assets/banner-bg.png";

const Banner = () => {
  return (
    <div
    style={{ backgroundImage: `url(${bannerImage})` }}
    className="bg-cover bg-bottom px-4 "
  >
    {" "}
    <div className="w-full h-auto top-banner  px-5 py-10 space-y-24 md:flex gap-12 md:px-16 md:h-[100vh]  lg:space-y-0">
      <div className="left-banner space-y-8 w-full flex flex-col justify-center items-center ">
        <div className="main-heading">
          <h1 className="font-bold text-4xl text-[#fff] leading-relaxed md:text-6xl">
            Class Time{" "}
            <span className="uppercase text-blue-700">Table</span>{" "}
          </h1>
        </div>
        <div className="description pb-8">
          <p className="font-medium text-lg text-[#fff]   leading-loose tracking-wider">
            New Table is issued for CS Department. Students click below to see time table
          </p>
        </div>
        <a className="" href="">
          <button className="flex justify-center items-center gap-2 bg-blue-700 py-4 px-9 rounded-md hover:bg-blue-950">
            <span className="invert">
           
            </span>
            <p className="text-white font-medium text-base ">
              {" "}
              Time Table
            </p>
          </button>
        </a>
      </div>

     </div>
  </div>
  )
}

export default Banner
