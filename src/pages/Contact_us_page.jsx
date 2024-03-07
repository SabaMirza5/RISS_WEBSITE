import React from 'react'
import { Link } from 'react-router-dom'

function Contact_us_page() {
  return (
<>
      <div className="flex md:flex-row flex-col p-[5%] bg-backgroundclr">
      <div className="basis-1/2 my-12">
          <h1 className="oswald text-black font-bold lg:text-[63px] md:text-4xl text-2xl md:leading-[65px] lg:leading-[85px]">Hello, there! we’ll be <span className="text-maincolor">glad to here from you.</span></h1>
          <p className="pt-5 hind md:text-lg text-base md:leading-[38px] font-semibold leading-7">We would love to hear from also feel free to suggest to us anything you like we are very open to them or if you have any queries regarding any of the RISS Training we would love to answer them.</p>
         
        </div>
<div className="basis-1/2">
    <div className="mx-auto p-2">
      <div className="max-w-sm mx-auto  bg-white md:px-5 md:py-10 rounded shadow-xl">
        <form action="#">
          <div className="mt-5">
            <input
              type="text"
              id="username"
              className="block w-full p-3 bg-white hind font-normal leading-3 text-[13px]  focus:outline-maincolor"
              placeholder='Full Name'
              required
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              id="email"
              className="block w-full p-3 bg-white hind font-normal leading-3 text-[13px] focus:outline-maincolor"
              placeholder='Email'
              required
            />
          </div>
          <div className="mt-3">
            <input
              type="number"
              id="tel"
              className="block w-full p-3 bg-white hind font-normal leading-3 text-[13px] focus:outline-maincolor"
              placeholder='Phone number'
              required
            />
          </div>
          <div className="mt-3">
            <textarea
              type="text"
              id="area"
              className="block w-full px-3 pt-3 pb-20 bg-white hind font-normal leading-3 text-[13px] resize-none focus:outline-maincolor"
              placeholder='Ask your question...'
              required
              
            />
          </div>
           <Link to="/" className="mt-12"><button className='px-6 py-2 shadow-shadowblack  border-2 border-black bg-white mt-4 font-medium oswald text-black hover:border-maincolor hover:text-maincolor hover:shadow-maincolor ml-3'>Send</button></Link>
        </form>
      </div>
    </div>
 
</div>
      </div>
    </>
  )
}

export default Contact_us_page
