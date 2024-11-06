import Footer from "./Footer";
import Inicio from "./Inicio";
import Navbar from "./Navbar";
import Nosotros from "./Nosotros";
import Sede from "./Sede";
import Servicios from "./Servicios";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 w-full z-20"> 
      <Navbar />
      </div>
      <div className="flex-1 overflow-auto">
        <div id="inicio">
          <Inicio />
        </div>
        <div id="nosotros">
          <Nosotros />
        </div>
        <div id="servicios">
          <Servicios />
        </div>
        <div id="sede">
          <Sede />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
