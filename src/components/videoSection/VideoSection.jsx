
import React from "react";
import { useTranslation } from "react-i18next";
import VideoCard from "./VideoCard";
import AnimatedComponent from "../animation/AnimatedComponent";
import services_vide from "/assets/videos/lux.mp4";
import services_vide2 from "/assets/videos/video1.mp4";
import services_vide3 from "/assets/videos/video2.mp4";

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#120f09] bg-gradient-to-b from-primary/5 to-primary/5  border-primary/10 py-16 sm:py-20 lg:py-28 overflow-hidden">
     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 place-self-center">
          {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
        {/* Header */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 text-center">
            <h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-center font-medium tracking-wider uppercase mb-3"
          >
            LATEST Video
          </h4>
          <AnimatedComponent animationType="fade-right">
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl leading-relaxed font-jost font-medium uppercase text-gray-200">
               {t("our_video_projects")} 
              </h1>
              <div className="lg:text-6xl text-5xl whitespace-nowrap absolute lg:-top-8 -top-10 left-1/2 transform -translate-x-1/2 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
                {t("our_video_projects")}0
              </div>
            </div>
          </AnimatedComponent>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-13  gap-8  ">
          {/* Sidebar */}
          {/* <div className="lg:col-span-3 ">
            <AnimatedComponent animationType="fade-right">
              <VideoText />
            </AnimatedComponent>
          </div> */}

          {/* Video Grid */}
          <div className="lg:col-span-9  ">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              <VideoCard
                number="01"
                title={t("Islamic")}
                description={t("walls and floors")}
                videoSrc={services_vide}
                poster="/assets/images/gallery/gallery11.JPG"
              />
              <VideoCard
                number="02"
                title={t("Modern")}
                description={t("any environment.")}
                videoSrc={services_vide2}
                poster="/assets/images/gallery/gallery10.JPG"
              />
              <VideoCard
                number="03"
                title={t("Clasic")}
                description={t("indoor and outdoor")}
                videoSrc={services_vide3}
                poster="/assets/images/gallery/gallery8.JPG"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
