import React from 'react'
import point1 from "../assets/point1.png";
import point2 from "../assets/point2.png";
import point3 from "../assets/point3.png";
import point4 from "../assets/point4.png";
import { Link } from "react-router-dom";

function Worries_sec() {
  return (
  
    <>
        <div className="flex md:pt-28 bg-backgroundclr  md:flex-row flex-col p-[5%] md:gap-52 gap-9">
      
        <div className="basis-1/2 ">
          <div className="sticky top-0 md:pl-6">
          <h2 className="oswald text-black font-bold lg:text-[61px] md:text-5xl text-2xl">Don't worry we've <span className="text-maincolor">got your back</span></h2>
          <h5  className='font-bold text-black oswald md:text-xl  text-base pt-7'>Get started with 4 simple steps to unroll expert course</h5>
          <p className="pt-3 hind  md:text-xl text-base hind ">We will make your online earning journey smooth with our tailored courses.</p>
          <p className="md:pt-5  pt-0hind md:text-xl text-base hind ">Our courses are designed to help you reach your goals and certainly help you in one way or the other,<span className="text-maincolor"> weather its earning through selling the skills or making your own resource utilizing those abilities</span></p>
          <Link to="/" ><button className='px-6 py-2 shadow-shadowblack text-lg border-2 border-black bg-white mt-12 font-medium oswald  text-black hover:border-maincolor hover:text-maincolor hover:shadow-maincolor'>Have question?</button></Link>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={point1} alt="" className='max-w-full h-auto mt-5' />
          <img src={point2} alt=""className=' max-w-full h-auto mt-16'/>
          <img src={point3} alt=""  className='max-w-full h-auto mt-16'/>
          <img src={point4} alt="" className='max-w-full h-auto mt-16'/>
        </div>
      </div>
    </>
  )
}

export default Worries_sec
