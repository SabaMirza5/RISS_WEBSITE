import React from "react";
import { Link } from "react-router-dom";

function Quote() {
  return (
    <>
      <div className="justify-center items-center text-center  flex p-[5%] flex-col bg-backgroundclr">
        <h1 className="text-black md:text-[87px] font-normal text-center text-2xl md:leading-[70px] rusty">
          “Most people don’t want to live their lives working for someone else.
          Fortunately, people are realizing that they can make more money online
          working for themselves and have time and freedom”
        </h1>
        <Link to="/" className="mt-12">
          <button className=" md:mr-6 px-6 py-2 shadow-shadowblack  md:static border-2 border-black bg-white mt-4 font-medium oswald  text-black hover:shadow-maincolor hover:text-maincolor">
            Reach us!
          </button>
        </Link>
      </div>
    </>
  );
}

export default Quote;
