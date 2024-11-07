import { useState } from "react";
import nosotros from "../assets/eyaj (1).webp";

const Nosotros = () => {
  type ValuesProps = "NOSOTROS" | "MISION" | "VISION" | "VALORES";

  const [activeTab, setActiveTab] = useState<ValuesProps>("NOSOTROS");

  const content: Record<ValuesProps, string> = {
    NOSOTROS:
      "Somos un equipo de dentistas con amplia experiencia en cuidados de la salud dental y junto a nuestro dentista influencer, te ayudaremos a cuidar tus dientes y con el trabajo en equipo, llegaremos a brindarte el mejor tratamiento para solucionar los problemas bucodentales para llevarte por el mejor camino de inversión para tu salud bucal.",
    MISION:
      " Nuestra misión es ser la mejor clínica odontológica del este de Caracas. Buscamos la excelencia de nuestros servicios basados en calidad humana, la más novedosa tecnología estomatogmática y una constante innovación. Nos enfocamos en el paciente y sus necesidades para ofrecer desde los servicios más sencillos hasta los más complicados.",
    VISION:
      "Clínica Dental Eyaj pretende ser referente a seguir dentro del sector de la Odontología por la realización de una Odontología de Excelencia, calidad asistencial y mejora continuada. En Clínica Dental Ainda buscamos la satisfacción de pacientes, profesionales, colaboradores y proveedores. ",
    VALORES:
      "Tratamos a nuestros pacientes como si fueran de nuestra familia. Somos honestos, profesionales, cercanos y perfeccionistas. Queremos que nuestros pacientes se sientan orgullosos de que seamos su dentista ",
  };

  return (
    <div className="flex flex-row items-center gap-6 justify-center px-6 py-10 min-h-screen text-black max-sm:flex-col max-lg:flex-col">
      <div className="flex flex-col ">
        <div className="flex justify-center gap-4 mb-6 font-Quicksand">
          {["NOSOTROS", "MISION", "VISION", "VALORES"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-semibold border-b-4 max-sm:text-xs ${
                activeTab === tab
                  ? "border-redE text-yellowE "
                  : "border-transparent text-yellowE"
              } hover:text-redE`}
              onClick={() => setActiveTab(tab as ValuesProps)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-full max-w-3xl p-6 rounded-lg text-center font-Quicksand  bg-black/10 backdrop-blur-md shadow-lg ">
          <h2 className="text-3xl font-bold text-redE mb-4 max-sm:text-lg ">{activeTab}</h2>
          <p className="text-lg text-purpleE max-sm:text-xs ">{content[activeTab]}</p>
        </div>
      </div>

      <img
        src={nosotros}
        alt="Nosotros"
        width={450}
        height={150}
        className="mb-8 max-sm:w-60"
      />
    </div>
  );
};

export default Nosotros;
