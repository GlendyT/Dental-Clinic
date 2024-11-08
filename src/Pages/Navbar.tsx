import { useNavigate } from "react-router-dom";
import logo from "../assets/logoeyaj2.webp";
import { usePage } from "../hooks/usePage";

const Navbar = () => {
  const navigate = useNavigate();
  const { isScrolled, scrollToSection } = usePage();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-row justify-between px-4 py-4 w-full absolute transition-all duration-300 text-white gap-4 ${
        isScrolled ? "bg-black/40 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <button onClick={handleLogoClick}>
        <img src={logo} alt="Logo" width={50} height={20} />
      </button>
      <div className="flex gap-6 text-xl font-Quicksand font-extrabold max-sm:text-xs ">
        <button onClick={handleLogoClick}>Inicio</button>
        <button onClick={() => scrollToSection("nosotros")}>Nosotros</button>
        <button onClick={() => scrollToSection("servicios")}>Servicios</button>
        <button onClick={() => scrollToSection("sede")}>Sede</button>
      </div>
    </div>
  );
};

export default Navbar;
