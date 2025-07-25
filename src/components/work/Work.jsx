

import { Link } from "react-router-dom";

// Service data
const collectionData = {

  "projects": [
    {
      "id": 1,
      "title": "City Star Caffe",
      "category": "Interior",
      "image": "/assets/images/gallery/gallery6.jpg",
      "link": "/gallery",
      "size": "2x"
    },
    {
      "id": 7,
      "title": "Stylish Family Appartment",
      "category": "Interior",
      "image": "/assets/images/gallery/gallery11.jpg",
      "link": "/gallery",
      "size": "2x"
    },
    {
      "id": 2,
      "title": "Minimal Guests House",
      "category": ["Decor", "Interior"],
      "image": "/assets/images/gallery/gallery10.jpg",
      "link": "/gallery"
    },
    {
      "id": 3,
      "title": "Art Family",
      "category": ["Decor", "Interior"],
      "image": "/assets/images/gallery/gallery7.jpg",
      "link": "/gallery"
    },
    {
      "id": 4,
      "title": "Private House in Spain",
      "category": ["Decor", "Interior"],
      "image": "/assets/images/gallery/gallery8.jpg",
      "link": "/gallery"    },
    {
      "id": 5,
      "title": "Modern Villa in Sitak",
      "category": "Interior",
      "image": "/assets/images/gallery/gallery9.jpg",
      "link": "/gallery"
    }
  ]
}



const Work = () => {
  return (
    <section className="p-0 bg-[#0f0d08] bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 relative">
       {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl"></div>
      </div>
       {/* Header */}
              <div className="flex flex-col  md:flex-row md:items-center lg:p-16 py-10 px-4 max-w-7xl w-full  place-self-center md:justify-between mb-12">
                <div>
                  <span className="text-sm uppercase tracking-widest text-primary font-semibold">
                    Gallery
                  </span>
                  <h2 className="text-3xl md:text-4xl font-medium text-white mt-2">
                    Our Gallery Paintings
                  </h2>
                </div>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={"/gallery"}
                  className="mt-6 md:mt-0 border w-fit border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-[#19160f] transition"
                >
                  View All Gallery
                </Link>
              </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
        {collectionData.projects.map((project) => (
          <Link 
          onClick={()=>window.scrollTo({top:0})}
          to={project.link}
            key={project.id} 
            className={`relative group overflow-hidden ${project.size === '2x' ? 'sm:col-span-2 sm:row-span-2  h-[40rem]' : ''}`}
          >
            <div className="relative">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Link to={project.link}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h5 className="text-white text-xl font-semibold">{project.title}</h5>
                  <i className="text-white text-2xl ml-2">+</i>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#19160f] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <h5>
                    <Link to={project.link} className="text-xl text-gray-200 font-semibold hover:text-primary">
                      {project.title}
                    </Link>
                  </h5>
                  <p className="mt-2">
                    {Array.isArray(project.category) ? (
                      project.category.map((cat, index) => (
                        <span key={index}>
                          <Link to={`/category/${cat.toLowerCase()}`} className="text-gray-300 hover:text-primary">
                            {cat}
                          </Link>
                          {index < project.category.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    ) : (
                      <Link to={`/category/${project.category.toLowerCase()}`} className="text-gray-600 hover:text-primary">
                        {project.category}
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;