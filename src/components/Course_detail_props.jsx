// import React from 'react'
// import { Link } from 'react-router-dom'

// function Course_detail_props(props) {

//   return (
//     <>
//       <div className="flex lg:flex-row flex-col bg-backgroundclr p-[5%] ">
//         <div className="basis-[70%] mx-auto md:pt-6 pt-10">
          
//         <h1 className="oswald text-black font-bold lg:text-[76px] md:text-5xl text-3xl md:leading-[100px]">{props.heading_main}<span className="text-maincolor"> {props.heading_main_span}</span></h1>
//           <p className="pt-5 oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px]">{props.heading_main_para}</p>
//           <p className="pt-5 text-black hind md:text-lg font-normal leading-9 text-sm">{props.heading_subpara}</p>
//           <p className="pt-5 oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px]">{props.heading_main_para_2}</p>
//           <div className="ml-8">
//           <ul className='list-disc text-black hind md:text-lg font-normal leading-9 text-sm'>
//             <li className='pt-2'>{props.li_1}</li>
//             <li className='pt-2'>{props.li_2}</li>
//             <li className='pt-2'>{props.li_3}</li>
//             <li className='pt-2'>{props.li_4}</li>
//             <li className='pt-2'>{props.li_5}</li>
//             <li className='pt-2'>{props.li_6}</li>
//             <li className='pt-2'>{props.li_7}</li>
//             <li className='pt-2'>{props.li_8}</li>
//             <li className='pt-2'>{props.li_9}</li>
//             <li className='pt-2'>{props.li_10}</li>
//             <li className='pt-2'>{props.li_11}</li>
//             <li className='pt-2'>{props.li_13}</li>
//             <li className='pt-2'>{props.li_14}</li>
//             <li className='pt-2'>{props.li_15}</li>
//             <li className='pt-2'>{props.li_16}</li>
//             <li className='pt-2'>{props.li_17}</li>
//             <li className='pt-2'>{props.li_18}</li>
//             <li className='pt-2'>{props.li_19}</li>
//             <li className='pt-2'>{props.li_20}</li>
//           </ul>
//           </div>
         
//         </div>
//         <div className="basis-[30%] md:pt-6 pt-10 md:pb-6 pb-10">
//           <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor ml-5">
//             <div className="p-[5%]">
//             <p className="pt-5 oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px]">{props.card_mainheading}</p>
//             <div className="flex justify-between pt-2 ">
//               <p className='text-black hind text-base font-normal'>{props.detail_1}</p>
//               <p className='text-black hind text-base font-semibold'>{props.detail__para_1}</p>
//             </div>
//             <div className="flex justify-between pt-2">
//               <p className='text-black hind text-base font-normal'>{props.detail_2}</p>
//               <p className='text-black hind text-base font-semibold'>{props.detail__para_2}</p>
//             </div>
//             <div className="flex justify-between pt-2">
//               <p className='text-black hind text-base font-semibold'>{props.detail_3}</p>
//               <p className='text-black hind text-base font-semibold'>{props.detail__para_3}</p>
//             </div> 
//             <p className="oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px] pt-2">{props.card_mainheading_2}</p>   
//             <p className="hind text-black font-medium text-base leading-6 pt-2">{props.card_mainheading_3}</p>     
//             <p className="oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px] pt-2">{props.card_mainheading_4}</p>   
//             <p className="hind text-black font-medium text-base leading-6 pt-2">{props.card_mainheading_5}</p>  




           
//       <div className="bg-white rounded shadow-xl pt-5">
//       <p className="text-black oswald text-2xl font-bold uppercase">{props.card_mainheading_6}</p>
//         <form action="#">
//           <div className="mt-5">
//             <input
//               type="text"
//               id="username"
//               className="block w-full p-3 bg-white hind font-normal leading-3 text-[13px]  focus:outline-maincolor"
//               placeholder='Full Name'
//               required
//             />
//           </div>
//           <div className="mt-3">
//             <input
//               type="email"
//               id="email"
//               className="block w-full p-3 bg-white hind font-normal leading-3 text-[13px] focus:outline-maincolor"
//               placeholder='Email'
//               required
//             />
//           </div>
//           <div className="mt-3">
//             <input
//               type="number"
//               id="tel"
//               className="block w-full p-3 bg-white hind font-normal leading-3 text-[13px] focus:outline-maincolor"
//               placeholder='Phone number'
//               required
//             />
//           </div>
//           <div className="mt-3">
//             <textarea
//               type="text"
//               id="area"
//               className="block w-full px-3 pt-3 pb-20 bg-white hind font-normal leading-3 text-[13px] resize-none focus:outline-maincolor"
//               placeholder='Ask your question...'
//               required
              
//             />
//           </div>
//            <Link to="/"><button className='px-6 py-2 shadow-shadowblack  border-2 border-black bg-white my-8 font-medium oswald text-black hover:border-maincolor hover:text-maincolor hover:shadow-maincolor ml-3'>Send</button></Link>
//         </form>
//       </div>
   
//             </div>
//           </div>
//         </div>
      
//       </div>
//     </>
//   )
// }









import React from 'react';
import { Link } from 'react-router-dom';

function Course_detail_props(props) {
  const {
    listData = [], 
  } = props;

  return (
    <>
    <div className="flex lg:flex-row flex-col bg-backgroundclr p-[5%] ">
        <div className="basis-[70%] mx-auto md:pt-6 pt-10">
         <h1 className="oswald text-black font-bold lg:text-[76px] md:text-5xl text-3xl md:leading-[100px]">{props.heading_main}<span className="text-maincolor"> {props.heading_main_span}</span></h1>
          <p className="pt-5 oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px]">{props.heading_main_para}</p>
          <p className="pt-5 text-black hind md:text-lg font-normal leading-9 text-sm">{props.heading_subpara}</p>
          <p className="pt-5 oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px]">{props.heading_main_para_2}</p>
      <div className="ml-8">
        <ul className='list-disc text-black hind md:text-lg font-normal leading-9 text-sm'>
          {listData.map((item, index) => (
            <li className='md:pt-4 pt-2' key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className="basis-[30%] md:pt-6 pt-10 md:pb-6 pb-10">
          <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor ml-5">
            <div className="p-[5%]">
            <p className="pt-5 oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px]">{props.card_mainheading}</p>
            <div className="flex justify-between pt-2 ">
              <p className='text-black hind text-base font-normal'>{props.detail_1}</p>
              <p className='text-black hind text-base font-semibold'>{props.detail__para_1}</p>
            </div>
            <div className="flex justify-between pt-2">
              <p className='text-black hind text-base font-normal'>{props.detail_2}</p>
              <p className='text-black hind text-base font-semibold'>{props.detail__para_2}</p>
            </div>
            <div className="flex justify-between pt-2">
              <p className='text-black hind text-base font-semibold'>{props.detail_3}</p>
              <p className='text-black hind text-base font-semibold'>{props.detail__para_3}</p>
            </div> 
            <p className="oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px] pt-2">{props.card_mainheading_2}</p>   
            <p className="hind text-black font-medium text-base leading-6 pt-2">{props.card_mainheading_3}</p>     
            <p className="oswald text-black font-semibold leading-5 uppercase md:text-xl text-base md:leading-[38px] pt-2">{props.card_mainheading_4}</p>   
            <p className="hind text-black font-medium text-base leading-6 pt-2">{props.card_mainheading_5}</p>  




           
      <div className="bg-white rounded shadow-xl pt-5">
      <p className="text-black oswald text-2xl font-bold uppercase">{props.card_mainheading_6}</p>
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
           <Link to="/"><button className='px-6 py-2 shadow-shadowblack  border-2 border-black bg-white my-8 font-medium oswald text-black hover:border-maincolor hover:text-maincolor hover:shadow-maincolor ml-3'>Send</button></Link>
        </form>
      </div>
   
            </div>
          </div>
      </div>
        </div>
       
    </>
  );
}

export default Course_detail_props;
