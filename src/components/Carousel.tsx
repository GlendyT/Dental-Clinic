import { NextButton, PrevButton } from "./EmblaCarouselArrowButtons";
import { Especialidades } from "./Especialidades";
import { useSlide } from "../hooks/useSlide";

const Carousel = () => {
  const {
    emblaRef,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
    nextBtnDisabled,
  } = useSlide();

  return (
    <div className="relative mx-auto w-full pt-20 max-sm:w-96 max-lg:w-full">
      <p className="text-5xl text-redE font-extrabold text-center pb-2 font-Quicksand max-sm:text-2xl uppercase">
        Servicios y Tratamientos
      </p>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[-1rem] touch-pan-y touch-pinch-zoom">
          {Especialidades.map((index) => (
            <div
              className="relative flex-shrink-0 w-[70%] min-w-0 pl-[1rem] transform-gpu"
              key={index.id}
            >
              <img
                className="rounded-2xl block w-full h-[34rem] max-sm:h-96 object-cover"
                src={index.image}
                alt="Your alt text"
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 ml-4 text-white  backdrop-blur-sm bg-black/70 animate-fade-in-up flex flex-col gap-4 text-start font-Quicksand rounded-b-2xl max-sm:text-xs">
                <p className="text-3xl text-yellowE font-extrabold max-sm:text-xs ">
                  {index.name}
                </p>
                {index.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[60%] w-full flex justify-between transform -translate-y-1/2 pointer-events-none">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default Carousel;
