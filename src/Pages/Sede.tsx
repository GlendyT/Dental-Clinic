import logo from "../assets/logoeyaj.webp";

const Sede = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black max-sm:flex-col max-sm:gap-2 max-sm:pt-16 max-2xl:gap-4 font-Quicksand px-20 ">
      <p className="text-5xl text-purpleE font-extrabold text-center pb-2 max-sm:text-2xl">
        SEDE
      </p>

      <div className="flex flex-row-2 gap-4 max-sm:flex-col">
        <div className=" rounded-md bg-gradient-to-tl from-red-600 to-yellow-600 p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.493925777815!2d-90.88677142542457!3d14.741180273620405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85896b7c297b4a31%3A0xd936f82113dd3f8a!2sClinica%20Dental%20Eyaj!5e0!3m2!1sen!2sgt!4v1730936874114!5m2!1sen!2sgt"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[48rem] h-96 max-sm:w-72"
          ></iframe>{" "}
        </div>

        <div className="flex flex-col  justify-center">
          <span className="text-start font-extrabold text-purpleE">
            Clínica Dental Eyaj
          </span>
          <p className="text-start font-extrabold text-purpleE">
            Encuentranos en:{" "}
          </p>{" "}
          <span>
            3ra. avenida 3-45, zona 2, segundo nivel Distribuidora Jerusalem,
            camino al antiguo hospital, Comalapa, Guatemala
          </span>
          <div className="flex justify-center">
            <img
              src={logo}
              alt=""
              width={150}
              height={150}
              className=" max-sm:w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sede;
