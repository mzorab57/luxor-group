import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PagesHeader from "../components/ui/PagesHeader";

const API_URL = "http://localhost:5000/api/gallery";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("Gallery data:", data); // Bo dîtnî datakan
      setGallery(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedImage(item.images[0]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  return (
    <div className="min-h-screen  bg-[#19160f]">
      <PagesHeader
        img={"/assets/images/gallery/page-header.jpg"}
        title={"Gallery"}
      />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-transparent rounded mt-20 mx-3 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-72">
                <img
                  src={`http://localhost:5000${item.images[0]}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Image load error:", e);
                    e.target.src = "/placeholder.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-40" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">
                    {item.category}
                  </span>

                  <button
                    onClick={() => openModal(item)}
                    className="px-6 py-2 text-gray-300 bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 rounded hover:bg-primary transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {isModalOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#23201a] border border-primary/20 overflow-y-auto  h-[90%] rounded max-w-2xl  w-full  shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 size-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal content */}
              <div className="p-4 overflow-y-auto ">
                <h3 className="text-xl font-bold text-gray-200 mb-6">
                  {selectedItem.title}
                </h3>

                <div className="relative lg:h-[400px] h-full mb-8 w-full rounded overflow-hidden ">
                  <img
                    src={`http://localhost:5000${selectedImage}`}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex space-x-4 mb-3 overflow-x-auto  scrollbar-hide py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {selectedItem.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`flex-shrink-0 w-24 h-24 rounded overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === img
                          ? "border-primary scale-105 shadow-lg"
                          : "border-transparent hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={`http://localhost:5000${img}`}
                        alt={`${selectedItem.title}-${index}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-200 mb-3">
                      Description
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-2">
                    <div className="bg-gradient-to-br from-primary/10 to-transparent  border border-primary/20 p-2 rounded flex justify-between items-center">
                      <div className="grid">
                        <h4 className="text-md font-medium text-gray-300 mb-2">
                          Category
                        </h4>
                        <p className="text-gray-300">
                          {selectedItem.category}
                        </p>
                      </div>
                      <div className="grid">
                        <h4 className="text-md font-medium text-gray-300 mb-2">
                          Size
                        </h4>
                        <p className="text-gray-300">
                          {selectedItem.size}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent  border border-primary/20 p-2 rounded flex justify-between items-center">
                      <div className="grid">
                        <h4 className="text-md font-medium text-gray-300 mb-2">
                          Artist
                        </h4>
                        <p className="text-gray-300">
                          {selectedItem.artist_name || "Not specified"}
                        </p>
                      </div>
                      <div className="grid">
                        <h4 className="text-md font-medium text-gray-300 mb-2">
                          Price
                        </h4>
                        <p className="text-gray-300">
                          ${selectedItem.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
