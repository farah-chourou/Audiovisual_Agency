/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections


import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import Presentation from "views/index-sections/Presentation.js";
import Contact from "views/index-sections/Contact.js";
import Service from "views/index-sections/Service.js";
import Realisation from "views/index-sections/Realisation.js";
import Kima from "views/index-sections/Kima.js";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <span style={{/*fontFamily:"Scheherazade New"*/color:"rgb(45, 45, 45)"}}>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
      
      <Presentation/>
      <Service/>
      <Kima/>
      <Realisation />
      <Contact/>
    

       {/*  <SectionCarousel />
        
    
       <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />*/}

        <DemoFooter />
      </div>
    </span>
  );
}

export default Index;
