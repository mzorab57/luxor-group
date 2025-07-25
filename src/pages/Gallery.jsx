import React, { useState, useEffect } from "react";
import PagesHeader from "../components/ui/PagesHeader";

const API_URL = "https://darkblue-seal-879137.hostingersite.com/api/gallery/get.php";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
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

      const fixed = data.map((item) => ({
        ...item,
        images: Array.isArray(item.images)
          ? item.images
          : JSON.parse(item.images || "[]"),
      }));

      setGallery(fixed);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
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

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded overflow-hidden shadow hover:scale-105 transition-transform duration-300 my-10"
            >
              <div className="relative h-72">
                <img
                  src={`https://darkblue-seal-879137.hostingersite.com/api/uploads/gallery/${item.images[0]}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => openModal(item)}
                  className="px-2 size-fit h-full place-self-center whitespace-nowrap py-1 text-gray-200 text-sm  bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded hover:bg-primary transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-[#23201a] h-[42rem] max-w-3xl w-full rounded-lg overflow-y-auto relative p-6 border border-primary/20">
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
                src={`https://darkblue-seal-879137.hostingersite.com/api/uploads/gallery/${selectedImage}`}
                alt={selectedItem.title}
                className="w-full h-full object-contain rounded relative  "
              />
              <div className="flex   gap-2 ">
                  <p className="text-gray-300 lg:hidden font-bold bg-gradient-to-br from-primary/20 to-transparent border-primary/80 px-2">
                    Category:{" "}
                    <span className="text-sm font-normal">
                      {selectedItem.category}
                    </span>
                  </p>
                  <p className="text-gray-300 lg:hidden font-bold bg-gradient-to-br from-primary/20 to-transparent border-primary/80 px-2">
                    Size:{" "}
                    <span className="text-sm font-normal">
                      {selectedItem.size}
                    </span>
                  </p>
                </div>
            </div>
            <div className="flex gap-2 overflow-x-auto mb-4 pt-3">
              {selectedItem.images.map((img, i) => (
                <img
                  key={i}
                  src={`https://darkblue-seal-879137.hostingersite.com/api/uploads/gallery/${img}`}
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
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-x-2">
              <div>
                <span className="text-gray-200 font-bold">Description </span>
                <p className="text-gray-300 text-sm font-medium">
                  {selectedItem.description}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-gray-300 font-bold bg-gradient-to-br from-primary/20 to-transparent border-primary/80 px-1 md:px-2 w-fit lg:w-full">
                  Art.Name:{" "}
                  <span className="text-sm font-normal">
                    {selectedItem.artist_name}
                  </span>
                </p>
                <div className="flex gap-1.5">
                  <p className="text-gray-300 hidden lg:block font-bold bg-gradient-to-br from-primary/20 to-transparent border-primary/80 px-1 md:px-2">
                    Category:{" "}
                    <span className="text-sm font-normal">
                      {selectedItem.category}
                    </span>
                  </p>
                  <p className="text-gray-300 hidden lg:block font-bold bg-gradient-to-br from-primary/20 to-transparent border-primary/80 px-1 md:px-2">
                    Size:{" "}
                    <span className="text-sm font-normal">
                      {selectedItem.size}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
