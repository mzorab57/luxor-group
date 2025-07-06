import React, { useRef,useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../components/layout/Main";

// Pages
import Home from "../pages/Home";

import Contact from "../pages/Contact";
import MattSchool from "../pages/pages/MattSchool";
import MattFurnishing from "../pages/pages/MattFurnishing";
import MattModel from "../pages/pages/MattModel";
import Hero from "../components/hero/Hero";
import Feature from "../components/Feature";
import AboutUs from "../components/aboutUs/AboutUs";
import Service from "../components/service/Service";
import Work from "../components/work/Work";
import Project from "../components/project/Project";
import Location from "../components/location/Location";

const ErrorElement = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
      <p className="text-xl text-gray-600 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Back Home
      </Link>
    </div>
  </div>
);
  

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<><Hero /><Feature /><AboutUs /> <Service /> <Work /> <Project /> <Location /> </> } />
       
        <Route path="pages">
          <Route path="mattschool" element={<MattSchool />} />
          <Route path="mattfurnishing" element={<MattFurnishing />} />
          <Route path="mattmodel" element={<MattModel />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorElement />} />
    </Routes>
  );
};

export default Router;
