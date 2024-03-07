
import React from "react";
import { Link } from "react-router-dom";
import Card2 from '../assets/Card2.png'
import Card from '../assets/Card.png'

function Card_props(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const filterEffect = isHovered
    ? "invert(54%) sepia(69%) saturate(4146%) hue-rotate(174deg) brightness(103%) contrast(103%)"
    : "none"; // No filter effect when not hovered

  const blueStyles = {
    color: isHovered ? "#00A8FF" : "black", // Change text color to blue when hovered
    filter: filterEffect, // Apply filter effect based on hover state
  };
  const buttonStyles = {
    color: isHovered ? "#00A8FF" : "black", // Change button text color to blue when hovered
    
  };
  const buttonsStyles = {
    color: isHovered ? "#00A8FF" : "black", // Change button text color to blue when hovered
    shadow: isHovered ? "-10px 10px 0px 0px #00A8FF" : "",
    boxShadow: isHovered ? '-10px 10px 0px 0px #00A8FF' : 'none', // Change button shadow on hover
    
  };
  const hrStyles = {
    borderColor: isHovered ? '#00A8FF' : 'black', // Change hr color on hover
  };
   const backgroundStyle = {
    backgroundImage: isHovered
      ? `url(${Card2})` // Replace path_to_hover_image with your actual hover image path
      : `url(${Card})`, // Use the original background image when not hovered
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  

  return (
    <>
      <div
        className="header-bg w-full"
        style={{ ...backgroundStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-[15%] lg:p-[18%]">
          <div className="flex justify-center items-center">
            <img
              src={props.card_img}
              alt=""
              className="max-w-full h-auto"
              style={blueStyles}
            />
          </div>
          <div className="justify-center  items-center pt-5">
            <h1
              className="text-black text-center oswald font-medium text-[22px]"
              style={buttonStyles}
            >
              {props.main_heading}
            </h1>
            <div className="flex justify-between pt-3 items-center">
              <p
                className="text-base hind font-normal text-black"
                style={buttonStyles}
              >
                {props.para}
              </p>
              <p className="font-semibold float-right" style={buttonStyles}>
                {props.para_span}
              </p>
            </div>
            <div className="flex justify-between pt-3 items-center">
              <p
                className="text-base hind font-normal text-black"
                style={buttonStyles}
              >
                {props.para2}
              </p>
              <p className="font-semibold float-right" style={buttonStyles}>
                {props.para_span2}
              </p>
            </div>
            <div className=" flex justify-between pt-3 pb-3 items-center">
              <p
                className="text-base hind font-normal text-black"
                style={buttonStyles}
              >
                {props.para3}
              </p>
              <p className="font-semibold float-right" style={buttonStyles}>
                {props.para_span3}
              </p>
            </div>
            <hr style={hrStyles} />
            <div className=" flex justify-between pt-3 items-center">
              <p
                className="text-base hind font-semibold text-black"
                style={buttonStyles}
              >
                {props.para4}
              </p>
              <p className="font-semibold float-right" style={buttonStyles}>
                {props.para_span4}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to={props.detail} className="pb-6" >
              <button className="px-6 py-2 shadow-shadowblack border-2 border-black bg-white mt-4 font-medium oswald text-black" style={buttonsStyles}>
                More details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card_props;
