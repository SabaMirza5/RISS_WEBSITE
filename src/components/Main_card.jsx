import React from 'react'
import Card_props from './Card_props'
// import Card from '../assets/Card.png'
import virtualassistance from '../assets/virtualassistance.png'
import card_1 from '../assets/card_1.png'
import cms from '../assets/cms.png'
import gd from '../assets/gd.png'
import wd from '../assets/wd.png'
import dm from '../assets/dm.png'
import ad from '../assets/ad.png'
import dd from '../assets/dd.png'
import freelancing from '../assets/freelancing.png'

function Main_card() {
  return (
    <>
    <div className="bg-backgroundclr pt-10">
    <h1 className="oswald text-black font-bold lg:text-[60px] md:text-5xl text-xl justify-center text-center pb-5">
    The trainings
          <span className="text-maincolor"> we offer</span>
        </h1>
    </div>
    <div className="flex justify-between gap-6 bg-backgroundclr p-[5%] md:flex-row flex-col">
      <Card_props
              card_img={card_1}
              main_heading="Basic computing"
              para="Training Duration"
              para_span="60 Days"
              para2="Seat Reservation"
              para_span2="5,000"
              para3="Monthly fee"
              para_span3="5,000"
              para4="Total fee"
              para_span4="15,000"
              detail="/course-detail-page"/> 
             
              
      <Card_props
              card_img={virtualassistance}
              main_heading="Virtual assistant"
              para="Training Duration"
              para_span="60 Days"
              para2="Seat Reservation"
              para_span2="5,000"
              para3="Monthly fee"
              para_span3="5,000"
              para4="Total fee"
              para_span4="15,000"
              detail="/virtual_assistence"/> 
              
      <Card_props
              card_img={cms}
              main_heading="CMS (Wordpress)"
              para="Training Duration"
              para_span="180 Days"
              para2="Seat Reservation"
              para_span2="5,000"
              para3="Monthly fee"
              para_span3="8,000"
              para4="Total fee"
              para_span4="53,000"
              detail="/cms"/> 
            
               
    
    
    </div>
    <div className="flex gap-6 bg-backgroundclr px-[5%] md:flex-row flex-col ">
   
   <Card_props
           card_img={gd}
           main_heading="Graphic designing"
           para="Training Duration"
           para_span="180 Days"
           para2="Seat Reservation"
           para_span2="5,000"
           para3="Monthly fee"
           para_span3="8,000"
           para4="Total fee"
           para_span4="58,000"
           detail="/gd"/> 
           
   <Card_props
           card_img={wd}
           main_heading="Web development"
           para="Training Duration"
           para_span="180 Days"
           para2="Seat Reservation"
           para_span2="5,000"
           para3="Monthly fee"
           para_span3="5,000"
           para4="Total fee"
           para_span4="65,000"
           detail="/wd"/> 
           
   <Card_props
           card_img={freelancing}
           main_heading="Freelancing"
           para="Training Duration"
           para_span="30 Days"
           para2="Seat Reservation"
           para_span2="5,000"
           para3="Monthly fee"
           para_span3="5,000"
           para4="Total fee"
           para_span4="10000"
           detail="/freelancing"/> 
         
            
 
 
 </div>
 <div className="flex gap-6 bg-backgroundclr p-[5%] md:flex-row flex-col ">
   
   <Card_props
           card_img={dm}
           main_heading="Digital marketing"
           para="Training Duration"
           para_span="90 Days"
           para2="Seat Reservation"
           para_span2="5,000"
           para3="Monthly fee"
           para_span3="7,000"
           para4="Total fee"
           para_span4="26,000"
           detail="/dm"/>
           
   <Card_props
           card_img={ad}
           main_heading="Android development"
           para="Training Duration"
           para_span="60 Days"
           para2="Seat Reservation"
           para_span2="5,000"
           para3="Monthly fee"
           para_span3="5,000"
           para4="Total fee"
           para_span4="15,000"
           detail="/ad"/> 
           
   <Card_props
           card_img={dd}
           main_heading="Desktop development"
           para="Training Duration"
           para_span="60 Days"
           para2="Seat Reservation"
           para_span2="5,000"
           para3="Monthly fee"
           para_span3="5,000"
           para4="Total fee"
           para_span4="15,000"
           detail="/dd"/> 
         
 </div>
     
              
    </>
  )
}

export default Main_card
