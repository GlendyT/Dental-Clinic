import { EmblaOptionsType } from "embla-carousel";
import Carousel from "../components/Carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const Servicios = () => {
  return (
    <div className="flex flex-col pb-2 items-center justify-center min-h-screen text-black max-sm:flex-col max-sm:mt-0">
      <Carousel options={OPTIONS} />
    </div>
  );
};

export default Servicios;
