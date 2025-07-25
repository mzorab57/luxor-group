import  { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Router from "./routes";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      once: false, // Ensure the animation triggers every time it scrolls back into view
      duration: 800, // Animation duration
      easing: "ease-in-out",
    });

    AOS.refresh(); // Ensure re-initialization to avoid stale animations
  }, []);

  return(
  <>
  <Header />
   <Router />;
   <Footer />
  </>
)
}

export default App;
