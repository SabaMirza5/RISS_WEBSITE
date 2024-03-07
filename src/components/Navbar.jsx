import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaTimes, FaAlignJustify } from 'react-icons/fa';

const Navbar = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Courses",link:"/courses"},
        {name:"Fee Structure",link:"/fee-structure"},
        {name:"About",link:"/about"},
   
      ]; 
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full top-0 left-0 z-50 sticky bg-[#fff]'>
           <div className='md:flex items-center justify-between  py-2 md:px-10 px-2 bg-white'>
            <img src={Logo} alt="image here" className='px-4 md:py-4 py-2 max-w-full h-auto ' />
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-8 z-10 cursor-pointer  md:hidden  w-7 h-7 '>
                {
                  
                    open ? <FaTimes/> : <FaAlignJustify/>   
                }
            </div>
            <ul className={`md:flex md:pb-0 pb-12 absolute md:static md:z-auto z-[1]  bg-[#fff] left-0 w-full  items-center  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 sm:top-[7rem]' : 'top-[-490px] sm:top[-550px]'}`}>
                {
                    Links.map((link, index) => (
                    <li className='md:ml-8 md:my-0 my-2 font-semibold hover:text-maincolor active:text-maincolor' key={index} >
                        <Link to={link.link} className='text-black oswald text-lg font-normal duration-500'>{link.name}</Link>

                    </li>))
                }
            <Link to="/contact_us"><button className=' md:mr-6 px-6 py-2 shadow-mainshadow  md:static border-2 border-black bg-white  xl:mt-0 mt-4 font-medium oswald md:hidden block hover:border-maincolor hover:text-maincolor hover:shadow-maincolor '>Contact us</button></Link>
            </ul>
            <Link to="/contact_us"><button className=' md:mr-6 px-6 py-2 shadow-mainshadow  md:static border-2 border-black bg-white  xl:mt-0 mt-4 font-medium oswald md:block hidden hover:border-maincolor hover:text-maincolor hover:shadow-maincolor'>Contact us</button></Link>
           </div>
        </div>







    );
};

export default Navbar;






















{/* <nav class="pl-[5%] pr-[5%]  pb-[5%] pt-[3%] bg-black text-white">
<div class="flex justify-between items-center">
  <div class="flex items-center">
    <img src="./images/footerlogo.png" alt="">
    <h2 class="text-white poppins  font-medium lg:text-base text-sm ml-3">Digital<br>Shaping</h2>
  </div>

  <!-- MOBILE NAV ICON -->
  <div class="lg:hidden absolute top-4 right-8">
    <button aria-label="navigation" id="mobileIcon" type="button" class="text-white transition duration-300 focus:outline-none focus:text-white hover:text-white">
      <i class="fas fa-bars text-3xl" id="bars"></i>
    </button>
  </div>

  <!-- NAVIGATION - LARGE SCREENS -->
  <div class="hidden lg:flex">
    <ul class="flex">
      <li class="lg:text-lg text-sm pr-5 "><a href="" class="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">Home</a></li>
      <li class="lg:text-lg text-sm pr-5"><a href="" class="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">About Us</a></li>
      <li class="lg:text-lg text-sm pr-5"><a href="" class="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">Services</a></li>
      <li class="lg:text-lg text-sm pr-5"><a href="" class="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">Portfolio</a></li>
    </ul>
  </div>

  <!-- Social icons -->
  <div class="hidden lg:flex items-center">
    <a href="#"><i class="fab fa-linkedin text-2xl pr-5 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i class="fab fa-instagram text-2xl pr-5 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i class="fab fa-facebook text-2xl pr-5 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="">
      <button type="button" class=" border border-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg  px-5 py-2.5 text-center    font-semibold poppins text-white lg:text-lg text-sm">Contact us</button>
    </a>
    <!-- <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
   Contact Us
      </span>
      </button> -->
  </div>
</div>

<!-- MOBILE MENU -->
<div id="mobileMenu" class="lg:hidden flex flex-col w-full mx-auto py-8 text-center">
  <a href="#" class="block text-white cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">Home</a>
  <a href="#" class="block text-white= cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">About Us</a>
    <a href="#" class="block text-white= cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">Services</a>
    <a href="#" class="block text-white= cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;">Portfolio</a>
    <a href="#" class="block text-white= cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 poppins text-white uppercase font-medium" style="text-underline-offset: 8px;"><button type="button" class=" border border-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg  px-5 py-2.5 text-center    font-semibold poppins text-white ">Contact us</button></a>
</div>
</nav> */}