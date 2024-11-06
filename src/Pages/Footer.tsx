import { useNavigate } from "react-router-dom";
import logo from "../assets/logoeyaj2.webp";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-row justify-between px-4 py-4 bg-[#552472] z-10 pb-4 ">
      <button onClick={handleClick}>
        <img src={logo} alt="Logo" width={100} height={100} />
      </button>
      <p className="text-5xl text-white">FOOTER</p>
    </div>
  );
};

export default Footer;
