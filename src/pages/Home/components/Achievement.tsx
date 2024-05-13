import { Fragment } from "react";
import Slider from "react-slick";
const Achievement = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Fragment>
      <div className="app-width hidden sm:grid grid-cols-4 gap-10 mt-20 ">
        <div>
          <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
            6989
          </h2>
          <div>Events</div>
        </div>
        <div>
          <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
            367
          </h2>
          <div>Projects</div>
        </div>
        <div>
          <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
            55,432
          </h2>
          <div>Donations</div>
        </div>
        <div>
          <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
            26
          </h2>
          <div>Volunteers</div>
        </div>
      </div>

      <div className="sm:hidden overflow-hidden mt-20">
        <Slider {...settings}>
          <div>
            <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
              6989
            </h2>
            <div>Events</div>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
              367
            </h2>
            <div>Projects</div>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
              55,432
            </h2>
            <div>Donations</div>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] text-[#00725E]">
              26
            </h2>
            <div>Volunteers</div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default Achievement;
