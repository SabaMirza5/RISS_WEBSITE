import React from "react";
import about_arrow from "../assets/about_arrow.png";
import { Link } from "react-router-dom";

function About_know_each_other_section() {
  return (
    <>
      <div className="flex md:flex-row flex-col p-[5%] bg-backgroundclr">
        <div className="pt-5">
          <h1 className="text-black oswald font-normal uppercase lg:text-[120px] md:text-[80px] text-4xl  md:leading-[100px] lg:leading-[160px] leading-10">
            Let’ts get to know each other
          </h1>
        </div>
        <div className="div">
          <img
            src={about_arrow}
            alt=""
            className="hover-effect max-w-full h-auto"
          />
        </div>  
      </div>
      <div className="flex md:flex-row flex-col p-[5%] bg-backgroundclr">
      <div className="basis-1/4">
        </div>
        <div className=" basis-3/4">
          <p className="text-black hind  font-normal md:leading-9 md:text-xl text-base leading-6">Basically, we started "RISS" a couple of years ago. And today with the passage of time we grew up so strong in our IT services with years of marketplace working experience. Now we started the RISS training institute to teach the generation with our professional and IT Field experience and expertise in a different field. Our aim is to provide the best IT trainings and share our experience with students at a minimal amount of charge and best way possible by giving them extra hours and helping them in every way possible.</p>
         
        </div>
         
      </div>
      
    </>
  );
}

export default About_know_each_other_section;
