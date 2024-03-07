
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import hammad from '../assets/hammad.png'

// export default function Student_review() {
//   return (
//     <>
//     <div className="p-[5%] bg-backgroundclr ">
//     <h1 className="oswald text-black font-bold lg:text-[60px] md:text-5xl text-xl justify-center text-center mb-5">
//     Check out our
//           <span className="text-maincolor"> students views</span>
//         </h1>
//     <Swiper navigation={true} modules={[Navigation]} className="mySwiper"   slidesPerView={3}
//         spaceBetween={50} >
      
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card shadow-shadowblack  border-2 border-black bg-white  hover:border-maincolor  hover:shadow-maincolor bg-[white]">
//           <div className="p-[5%] opacity-[1] transform scale-110 text-center justify-center items-center flex flex-col">
//           <div className="p-[5%] justify-center items-center flex flex-col">
//             <img src={hammad} alt="" className='max-w-full h-auto' />
//             <h2 className="hind md:text-base text-sm text-black leading-6 my-6">RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.</h2>
//             <p className='hind font-xl text-black font-bold my-5'>Hammad Ahmad</p>
//            </div>
//            </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
     
//     </>
//   );
// }










// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import hammad from '../assets/hammad.png';

// export default function StudentReview() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.activeIndex);
//   };

//   return (
//     <>
//       <div className="p-[5%] bg-backgroundclr">
//         <h1 className="oswald text-black font-bold lg:text-[60px] md:text-5xl text-xl justify-center text-center mb-10">
//           Check out our
//           <span className="text-maincolor"> students views</span>
//         </h1>
//         <Swiper
//           navigation={true}
//           loop={true}
//           modules={[Navigation]}
//           className="mySwiper"
          
//           slidesPerView={3}
//           spaceBetween={50}
//           onSlideChange={(swiper) => handleSlideChange(swiper)}
//            breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//         >
//           {[...Array(9)].map((_, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className={`card shadow-shadowblack border-2 border-black bg-white transition-opacity duration-500 hover:border-maincolor  hover:shadow-maincolor ${
//                   activeIndex === index ? 'opacity-50' : 'opacity-100'
//                 }`}
//               >
//                 <div className="p-[5%] text-center justify-center items-center flex flex-col">
//                   <div className="p-[5%] justify-center items-center flex flex-col">
//                     <img src={hammad} alt="" className="max-w-full h-auto" />
//                     <h2 className="hind md:text-base text-sm text-black leading-6 my-6">
//                       RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.
//                     </h2>
//                     <p className="hind font-xl text-black font-bold my-5">Hammad Ahmad</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// }






import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import hammad from '../assets/hammad.png';

export default function StudentReview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const slidesToShow = window.innerWidth < 640 ? 1 : 3;

  return (
    <>
      <div className="p-[5%] bg-backgroundclr">
        <h1 className="oswald text-black font-bold lg:text-[60px] md:text-5xl text-xl justify-center text-center mb-10">
          Check out our
          <span className="text-maincolor"> students views</span>
        </h1>
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={slidesToShow}
          spaceBetween={50}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {[...Array(9)].map((_, index) => (
            <SwiperSlide key={index}>
              <div
                className={`card shadow-shadowblack border-2 border-black bg-white transition-opacity duration-500 ${
                  slidesToShow === 1 ? 'opacity-100' : activeIndex === index ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div className="p-[5%] text-center justify-center items-center flex flex-col">
                  <div className="p-[5%] justify-center items-center flex flex-col">
                    <img src={hammad} alt="" className="max-w-full h-auto" />
                    <h2 className="hind md:text-base text-sm text-black leading-6 my-6">
                      RISS institute is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.
                    </h2>
                    <p className="hind font-xl text-black font-bold my-5">Hammad Ahmad</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
