import { FloatingWhatsApp } from "../components/FloatingWhatsAppl";
import Footer from "./Footer";
import Inicio from "./Inicio";
import Navbar from "./Navbar";
import Nosotros from "./Nosotros";
import Sede from "./Sede";
import Servicios from "./Servicios";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 w-full z-20 ">
        <Navbar />
      </div>
      <div className="flex-1 overflow-auto">
        <div id="inicio">
          <Inicio />
        </div>
        <div id="nosotros" className="backdrop-blur-sm bg-black/10">
          <Nosotros />
          <hr className="py-28 bg-redE max-sm:py-16" />
        </div>
        <div id="servicios" className="backdrop-blur-sm bg-black/10">
          <Servicios />
          <hr className="py-28 bg-yellowE max-sm:py-16" />
        </div>
        <div id="sede" className="backdrop-blur-sm bg-black/10">
          <Sede />
        </div>
      </div>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Home;
