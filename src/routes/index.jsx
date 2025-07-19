import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../components/layout/Main";
import Loading from "../components/loading/Loading";

// Pages

// import Contact from "../pages/Contact";


// Components
import Hero from "../components/hero/Hero";
import Feature from "../components/Feature";
import AboutUs from "../components/aboutUs/AboutUs";
import ServiceSection from "../components/service/ServiceSection";
import Work from "../components/work/Work";
import Project from "../components/project/Project";
import Location from "../components/location/Location";


import MainDashboard from "../components/mainDashboard/MainDashboard";


const Service = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/Service")), 4000)
    )
);
const Gallery = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/Gallery")), 1000)
    )
);
const OurVideos = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/OurVideos")), 3000)
    )
);
const OurProject = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/OurProject")), 3000)
    )
);


const ErrorElement = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
      <p className="text-xl text-gray-600 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary"
      >
        Go Back Home
      </Link>
    </div>
  </div>
);

const LazyComponent = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route
          index
          element={
            <>
           
              <Hero />
            
              <Feature />
              <AboutUs />
              <ServiceSection />
              <Work />
              <Project />
              <Location />
            </>
          }
        />
        <Route path="gallery" element={<Gallery />} />
        <Route path="project" element={<OurProject />} />
        <Route path="video" element={<OurVideos />} />
        <Route path="service" element={<Service />} />
        <Route path="dashboard" element={<MainDashboard />} />
        <Route path="contact" element={<Location />} />
      </Route>
      <Route path="*" element={<ErrorElement />} />
    </Routes>
  );
};

export default Router;
