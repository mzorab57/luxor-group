import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PagesHeader from "../components/ui/PagesHeader";

const API_URL = "http://localhost/project-api/gallery/get.php";

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
  
      // 👇 ئەمە دڵنیابە کە images array ـە!
      const fixed = data.map((item) => ({
        ...item,
        images: Array.isArray(item.images)
          ? item.images
          : JSON.parse(item.images || "[]"),
      }));
  
      console.log("Fixed Gallery:", fixed); // test
      setGallery(fixed);
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
    <div className="min-h-screen bg-[#19160f]">
      <PagesHeader
        img={"/assets/images/gallery/page-header.jpg"}
        title={"Gallery"}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
      >
        {gallery.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-72 ">
              <img
                src={`http://localhost/project-api/uploads/gallery/${item.images[0]}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex justify-between">
              <div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-1">{item.description}</p>
              </div>
              <button
                onClick={() => openModal(item)}
                className="px-4 size-fit h-full place-self-end whitespace-nowrap  py-2 text-gray-200 text-sm border border-primary/30 rounded hover:bg-primary transition"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-[#23201a] max-w-3xl w-full rounded-lg overflow-y-auto relative p-6 border border-primary/20"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-primary"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">
              {selectedItem.title}
            </h2>
            <div className="relative h-96 mb-6">
              <img
                src={`http://localhost/project-api/uploads/gallery/${selectedImage}`}
                alt={selectedItem.title}
                className="w-full h-full object-contain rounded"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto mb-4">
              {selectedItem.images.map((img, i) => (
                <img
                  key={i}
                  src={`http://localhost/project-api/uploads/gallery/${img}`}
                  alt={`thumb-${i}`}
                  className={`w-24 h-24 object-cover rounded cursor-pointer border-2 ${
                    selectedImage === img
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <p className="text-gray-300">{selectedItem.description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
