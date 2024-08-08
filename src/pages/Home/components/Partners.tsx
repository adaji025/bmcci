import Slider from "react-slick";
import NYSC from "../../../assets/partners/NYSC.jfif";
import FIRS from "../../../assets/partners/FIRS.jfif";
import CBN from "../../../assets/partners/cbn-logo.jfif";
import NHRC from "../../../assets/partners/NHRC.jfif";
import CIDI from "../../../assets/partners/cidi.jpg";
import KAS from "../../../assets/partners/kas.jpg";
import RASAM from "../../../assets/partners/rasam.jpg";
import SI from "../../../assets/partners/si.jpeg";
import NCC from "../../../assets/partners/ncc.jpeg";
import JADE from "../../../assets/partners/jade.jpeg";

const Partners = () => {
  const images: Array<any> = [
    NYSC,
    FIRS,
    CBN,
    NHRC,
    CIDI,
    KAS,
    RASAM,
    SI,
    NCC,
    JADE,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5.4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Card = (value: any) => {
    return (
      <div className="h-[164px] h-[100%] w-[90%] border border-[#00725E] p-5 rounded-xl flex justify-center">
        <img src={value.data} alt="Partner" className="max-h-[100%]" />
      </div>
    );
  };

  return (
    <div className="overflow-hidden mt-32 app-width">
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 lg:gap-20">
        <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Our Partners
          </div>
          <div className="max-w-[600px]">
            <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
              Our Esteemed Partners
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-[500px] ml-auto">
            Beyond Mentors Community Care Initiatives (BMCCI) is devoted to the
            social, economic and educational development; counselling and
            mentoring of rural and urban communities in Northern Nigeria...
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {images.map((img, i) => (
            <Card key={i} data={img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
