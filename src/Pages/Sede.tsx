import logo from "../assets/logoeyaj.webp";

const Sede = () => {
  return (
    <div className="flex flex-row-2 items-center justify-center min-h-screen text-black max-sm:flex-col max-sm:gap-2 max-sm:mt-24 max-2xl:gap-2 ">
      <div>
        <p className="text-5xl text-blue-800">SEDE</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla
        culpa saepe quam repellat dolore minima id optio architecto odit?
        Mollitia sequi reiciendis dolor fugit ducimus adipisci eligendi dolorem
        ratione.
      </div>
      <img src={logo} alt="" width={550} height={150} />
    </div>
  );
};

export default Sede;
