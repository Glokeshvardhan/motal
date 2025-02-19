import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rooms from "./Rooms";
import Services from "./Services";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Readmore1 from "./Readmore1";
import View from "./View";
import Moreinfo from "./Moreinfo";

const Routing = () => {
  return (
    <>
   

        <Routes>
        <Route path="*" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Readmore1" element={<Readmore1 />} />
          <Route path="/View" element={<View />} />
          <Route path="/Moreinfo" element={<Moreinfo />} />



          
        </Routes>
       
    </>

  );
};

export default Routing;
