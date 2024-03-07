
import Footer from "./components/Footer";
import Navbar_Header from './components/Navbar_Header';
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import {  Routes, Route, } from "react-router-dom";
import Courses_page from "./pages/Courses_page";
import Fee_Structure from "./pages/Fee_Structure";
import About_us_page from "./pages/About_us_page";
import Contact_us_page from "./pages/Contact_us_page";
import Course_detail_page from "./pages/Course_detail_page";
import Virtual_assistence from "./pages/Virtual_assistence";
import Cms from "./pages/Cms";
import Graphic_designing from "./pages/Graphic_designing";
import Web_development from "./pages/Web_development";
import Freelancing from "./pages/Freelancing";
import Digital_markiting from "./pages/Digital_markiting";
import Android_development from "./pages/Android_development";
import Desktop_development from "./pages/Desktop_development";



function App() {
  return (
    <>
    <Navbar_Header/>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/courses" element={<Courses_page />} /> 
          <Route exact path="/fee-structure" element={<Fee_Structure />} /> 
          <Route exact path="/about" element={<About_us_page />} /> 
          <Route exact path="/contact_us" element={<Contact_us_page />} /> 
          <Route exact path="/course-detail-page" element={<Course_detail_page />} /> 
          <Route exact path="/virtual_assistence" element={<Virtual_assistence />} /> 
          <Route exact path="/cms" element={<Cms />} /> 
          <Route exact path="/gd" element={<Graphic_designing />} /> 
          <Route exact path="/wd" element={<Web_development/>} /> 
          <Route exact path="/freelancing" element={<Freelancing/>} /> 
          <Route exact path="/dm" element={<Digital_markiting/>} /> 
          <Route exact path="/ad" element={<Android_development/>} /> 
          <Route exact path="/dd" element={<Desktop_development/>} /> 
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;