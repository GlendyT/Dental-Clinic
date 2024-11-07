import logo from "../assets/logoeyaj2.webp";
import logotipo from "../assets/logotipo.png";
import { Iconos } from "../components/Iconos";

const Inicio = () => {
  return (
    <div className=" flex flex-row-2 items-center justify-center min-h-screen text-black max-sm:flex-col max-sm:gap-2 max-2xl:gap-2 bg-eyaj bg-cover bg-center ">
      <div className=" backdrop-blur-sm bg-black/50 w-full flex flex-col gap-1 items-center justify-center text-center min-h-screen px-64 max-sm:px-12 text-white font-Quicksand">
        <div className="flex flex-col">
          <img src={logo} alt="" width={250} height={150} />
          <span className="text-end px-4">Clínica Dental</span>
          <img
            src={logotipo}
            alt=""
            width={250}
            height={150}
            className="items-end justify-end"
          />
        </div>

        <div className="flex flex-row gap-4 max-sm:gap-2">
          <Iconos />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
