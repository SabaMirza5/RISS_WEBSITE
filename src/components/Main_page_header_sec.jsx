import React from "react";
import main_page_header_img from "../assets/main_page_header_img.png";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

function Main_page_header_sec() {
  return (
    <>
      <div className="flex md:pt-8 bg-backgroundclr  md:flex-row flex-col p-[5%]">
        <div className="basis-1/2 my-auto mx-0">
          <h1 className="oswald text-black font-bold lg:text-[76px] md:text-5xl text-2xl md:leading-[100px]">Is it really easy to earn <span className="text-maincolor">money online?</span></h1>
          <p className="pt-5 hind md:text-2xl text-base md:leading-[38px]">Today, a lot of people are looking for how to make money online. But, unfortunately, <span className="font-bold">it is not easy to earn online</span>  without having any IT skill.</p>
          <Link to="/" className="mt-12"><button className=' md:mr-6 px-6 py-2 shadow-shadowblack  border-2 border-black bg-white mt-4 font-medium oswald text-black hover:border-maincolor hover:text-maincolor hover:shadow-maincolor'>Explore more</button></Link>
        </div>
        <div className="basis-1/2 group ">
          <img src={main_page_header_img} alt="" className="max-w-full  h-auto hidden group-hover:block"/>
          <img src={hero} alt="" className="max-w-full  h-auto  block group-hover:hidden"/>
        </div>
      </div>
    </>
  );
}

export default Main_page_header_sec;
