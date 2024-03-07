import React from "react";
import question_img from '../assets/question_img.png'

function Question_sec() {
  return (
    <>
      <div className="p-[5%] bg-backgroundclr">
        <h1 className="oswald text-black font-bold lg:text-[60px] md:text-5xl text-xl opacity-20">
          We have a{" "}
          <span className="text-maincolor">question for you.......</span>
        </h1>
        <br />
        <h1 className="oswald text-black font-bold lg:text-[60px] md:text-5xl text-xl opacity-40">
          We have a{" "}
          <span className="text-maincolor">question for you.......</span>
        </h1>
        <br />
        <h1 className="oswald text-black font-bold lg:text-[60px] md:text-5xl text-xl opacity-60">
          We have a{" "}
          <span className="text-maincolor">question for you.......</span>
        </h1>
        <br />
      </div>
      <div className="pl-[5%] pr-[5%] bg-backgroundclr md:flex-row flex-col flex  gap-8 lg:gap-52">
        <div className="">
          <p className="oswald md:text-base  lg:text-3xl font-light lg:leading-[50px] md:leading-[30px] text-paraclr text-2xl leading-8">
            If you had to choose <br />between working in an office<br /> for 8 hours a day
          </p>
          <p className="oswald md:text-base lg:text-3xl font-light lg:leading-[50px] text-black text-2xl leading-8 md:leading-[30px]">Or working from anywhere<br /> in the world, which would<br /> you choose?</p>
        </div>
        <div className="">
          <img src={question_img} alt="" className=" md:mt-0 mt-7 max-w-full h-auto  "/>
        </div>
      </div>
    </>
  );
}

export default Question_sec;
