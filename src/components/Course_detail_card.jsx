import React from 'react'
import Course_detail_props from './Course_detail_props'

function Course_detail_card() {
  return (
    <>
<Course_detail_props
  heading_main="Basic"
  heading_main_span="Computing"
  heading_main_para="Course Overview"
  heading_subpara="You will learn the basic parts of a computer and hardware and Software like Microsoft word , Excel 2007: Introduction, Workbook, Worksheet, Formatting in excel , MS PowerPoint and much more"
  heading_main_para_2="Brief Contents"
  listData={[
  ' Introduction, Characteristics of a Computer',
  'Applications of Computer',
   'Basic Components of PC',
   "Classification of Computers",
   "Computer Architecture",
   "Introduction, Classification of Number System",
   "Hardware and Software",
   "Windows XP",
   "MS Word: Introduction, Windows 2007 Interface",
   "Excel 2007: Introduction, Workbook, Worksheet, Formatting in excel",
   "MS PowerPoint: Introduction, Creating a Presentation, Basic Formatting in PowerPoint,",
   "Security and Networking",
  ]}
  card_mainheading="Course fee"
detail_1="Seat Reservation"
detail__para_1="5,000"
detail_2="Monthly fee"
detail__para_2="5,000"
detail_3="Total fee"
detail__para_3="15,000"
card_mainheading_2="Duration & Frequency"
card_mainheading_3="2 months ( 60 days with 3 training sessions of 1 hour a week )"
card_mainheading_4="Skills you will have after"
card_mainheading_5="Expert in common usage of computer"
card_mainheading_6="have any query?"
/>
    </>
  )
}

export default Course_detail_card
