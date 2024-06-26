import Gallery1 from "../../../assets/png/home-2.jpg";
import Gallery6 from "../../../assets/png/home-2.jpg";
import Gallery3 from "../../../assets/png/home-3.jpg";
import Gallery4 from "../../../assets/png/home-4.jpg";
import Gallery5 from "../../../assets/png/gallery/gallery5.png";
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
          <img src={Gallery1} alt="" className="w-full h-full rounded-[20px]" />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-5">
            <img src={Gallery5} alt="" className="w-full rounded-[20px]" />
            <img src={Gallery4} alt="" className="w-full rounded-[20px]" />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <img src={Gallery3} alt="" className="w-full rounded-[20px]" />
            <img src={Gallery6} alt="" className="w-full rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
