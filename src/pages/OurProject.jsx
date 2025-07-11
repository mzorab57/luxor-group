import React, { useState } from "react";
import PagesHeader from "../components/ui/PagesHeader";

const projects = [
  {
    id: 25,
    images: [
      "/assets/images/gallery/gallery1.webp",
      "/assets/images/gallery/gallery2.webp",
      "/assets/images/gallery/gallery3.webp",
      "/assets/images/gallery/gallery4.webp",
      "/assets/images/gallery/gallery1.webp",
      "/assets/images/gallery/gallery2.webp",
      "/assets/images/gallery/gallery3.webp",
      "/assets/images/gallery/gallery4.webp",
    ],
    qr_code: "3de",
    title: "io",
    description: "Sulaymaniyah, KRG kjhu ijuhui iuhui",
    category: "thsrtrth",
    size: "33",
    price: "0.00",
    sku: "TEST0012",
    orientation: "ff",
    artist_name: "hndren",
    upload_date: "2025-07-11T08:23:00.000Z",
  },
  {
    id: 26,
    images: [
      "/assets/images/gallery/gallery1.webp",
      "/assets/images/gallery/gallery2.webp",
      "/assets/images/gallery/gallery3.webp",
      "/assets/images/gallery/gallery4.webp",
    ],
    qr_code: "e541d",
    title: "jo",
    description: "asdcfa ecfad vc adzv csd azv  adzvc",
    category: "Test2",
    size: "45",
    price: "41.00",
    sku: "TEST0012",
    orientation: "modrn",
    artist_name: "hndren",
    upload_date: "2025-07-11T08:26:00.000Z",
  },
];

const OurProject = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const openModal = (images, idx) => {
    setModalImages(images);
    setCurrentImgIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = () => {
    setCurrentImgIdx((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };
  const showNext = () => {
    setCurrentImgIdx((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className=" bg-[#19160f] relative ">
      <PagesHeader
        img={"/assets/images/gallery/gallery1.webp"}
        title={"Projects"}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto py-12 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded shadow-lg overflow-hidden flex flex-col md:flex-row hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full md:w-1/2 object-cover cursor-pointer"
              onClick={() => openModal(project.images, 0)}
            />
            <div className="p-6 flex flex-col justify-between ">
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {/* <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-2">
                  <span className="bg-gradient-to-br from-primary/10 to-transparent  border border-primary/20 px-2 py-1 rounded">
                    Category: {project.category}
                  </span>
                  <span className="bg-gradient-to-br from-primary/10 to-transparent  border border-primary/20 px-2 py-1 rounded">
                    Size: {project.size} m²
                  </span>
                  <span className="bg-gradient-to-br from-primary/10 to-transparent  border border-primary/20 px-2 py-1 rounded">
                    Price: ${project.price}
                  </span>
                  <span className="bg-gradient-to-br from-primary/10 to-transparent  border border-primary/20 px-2 py-1 rounded">
                    SKU: {project.sku}
                  </span>
                  <span className="bg-gradient-to-br from-primary/10 to-transparent  border border-primary/20 px-2 py-1 rounded">
                    Orientation: {project.orientation}
                  </span>
                </div> */}
                <span className="text-xs text-gray-400">
                  Artist: {project.artist_name}
                </span>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto rounded-lg bg-[#23201a]/70 p-2 scrollbar-hide">
                {project.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={project.title + " preview " + (idx + 2)}
                    className="w-12 h-12 object-cover rounded border border-primary/30 cursor-pointer transition-transform hover:scale-110"
                    onClick={() => openModal(project.images, idx + 1)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-[#19160f] rounded-lg shadow-2xl p-6 max-w-xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImages[currentImgIdx]}
              alt="Project Large"
              className="w-full max-h-[400px] object-contain rounded mb-4"
            />
            <div className="flex justify-between max-w-md w-full mb-4">
              <button
                className="px-4 py-2 bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 text-gray-200 rounded hover:bg-primary/50"
                onClick={showPrev}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 text-gray-200 rounded hover:bg-primary/50"
                onClick={showNext}
              >
                Next
              </button>
            </div>
            <div className="flex gap-2 justify-center overflow-x-auto">
              {modalImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={"Thumbnail " + (idx + 1)}
                  className={`size-12 object-cover rounded border cursor-pointer ${
                    idx === currentImgIdx ? "border-primary border-2" : ""
                  }`}
                  onClick={() => setCurrentImgIdx(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProject;
