import Gallery1 from "../../../assets/png/gallery/g1.png";
const Gallery = () => {
  return (
    <div className="app-width mt-32">
      <div className="flex justify-center">
        <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Gallery
        </div>
      </div>
      <h2 className="font-semibold text-[32px] lg:text-[48px] mt-5 text-center">
        Raise your funds for a cause you care
      </h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <div>
          <img src={Gallery1} alt="" />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-5">
            <img src={Gallery1} alt="" />
            <img src={Gallery1} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <img src={Gallery1} alt="" />
            <img src={Gallery1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
