import React from 'react'
import Main_page_header_sec from '../components/Main_page_header_sec'
import Worries_sec from '../components/Worries_sec'
import Question_sec from '../components/Question_sec'
import Feature_sec from '../components/Feature_sec'
import Student_review from '../components/Student_review'
import Quote from '../components/Quote'
import Main_card from '../components/Main_card'

function Home() {
  return (
    <>
      <Main_page_header_sec/>
      <Worries_sec/>
      <Main_card/>
      <Question_sec/>
      <Feature_sec/>
      <Student_review/>
      <Quote/>
    </>
  )
}

export default Home
