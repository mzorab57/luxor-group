

import { Link } from "react-router-dom";
import AnimatedComponent from "../animation/AnimatedComponent";
import { useTranslation } from "react-i18next";

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
  
  const { t } = useTranslation();
  return (
    <section className="py-10 bg-[#0f0d08] bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 relative">
       {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl"></div>
      </div>
      {/* Header */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 text-center">
            <h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-center font-medium tracking-wider uppercase mb-3"
          >
             {t("gallery")} 
          </h4>
          <AnimatedComponent animationType="fade-right">
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl leading-relaxed font-jost font-medium uppercase text-gray-200">
               {t("our_video_projects")} 
              </h1>
              <div className="lg:text-6xl text-5xl whitespace-nowrap absolute lg:-top-8 -top-10 left-1/2 transform -translate-x-1/2 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
                {t("our_video_projects")}
              </div>
            </div>
          </AnimatedComponent>
          {/* <div className=" w-full text-center pt-5">
            <Link
              to="/gallery"
              className=" w-full  hover:text-black hover:bg-primary font-medium text-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              View All Projects
            </Link>
          </div> */}
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