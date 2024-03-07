import React from 'react'
import our_goal_img from '../assets/our_goal_img.png'
import { Link } from 'react-router-dom';

function About_our_goal() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textStyles = {
    color: isHovered ? "#00A8FF" : "#F5F5F5",
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#000",
  };
  return (
    <>

     <div className="p-[5%] bg-backgroundclr">
        <h1 className="oswald  text-center text-black uppercase lg:text-[250px] md:text-[100px] font-bold text-5xl lg:leading-[250px] md:leading-[50px]" style={textStyles} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        our GOals
        </h1>
        <br />
      </div>
      <div className="flex md:flex-row flex-col bg-backgroundclr p-[5%]">
      <div className="basis-2/5">
          <img src={our_goal_img} alt=""  className='max-w-full h-auto'/>
        </div>
        <div className="basis-3/5 md:mt-0 mt-5">
          <p className='text-black hind md:text-xl text-sm font-semibold md:leading-9 leading-6 uppercase'>uncompromising commitment to provide students theoretical as well as practical aspect of the subject.</p>
          <p className='text-black hind md:text-xl text-sm font-semibold md:leading-9 leading-6 uppercase md:pt-8 pt-4'>A focus on a student learning outcome based approach and give them extra attention and hours – we acknowledge the onus is on us</p>
          <p className='text-black hind md:text-xl text-sm font-semibold md:leading-9 leading-6 uppercase md:pt-8 pt-4'>to provide our students  internships in RISS software house, to gain practical experience for their skills. With a completely marketplace approach on the live projects.</p>
        </div>
       

      </div>

      <div className="justify-center items-center text-center  flex p-[5%] flex-col bg-backgroundclr">
        <h1 className="text-black md:text-[87px] font-normal text-center text-2xl md:leading-[70px] rusty">
        We believe education is the ability to meet life’s situations
        </h1>
        <Link to="/" className="md:mt-12 mt-5">
          <button className=" md:mr-6 px-6 py-2 shadow-shadowblack  md:static border-2 border-black bg-white font-medium oswald  text-black hover:shadow-maincolor hover:text-maincolor">
          Get in touch!
          </button>
        </Link>
      </div>
      
     
    </>
  )
}

export default About_our_goal


