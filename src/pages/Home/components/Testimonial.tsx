import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import QuoteImage from "../../../assets/svg/quote.svg";
import DeborahImage from "../../../assets/png/board-members/deborah.png";
import Slider from "react-slick";
import { useRef } from "react";

const Card = () => {
  return (
    <div className="w-[96%] border border-[#00725E] rounded-2xl min-h-[424px] px-5 py-7 h-full flex flex-col justify-between">
      <div>
        <img src={QuoteImage} alt="" />
      </div>

      <div className="flex-1 mt-10">
        <h4 className="text-[24px]">Kindness</h4>
        <div className="mt-3">
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is{" "}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={DeborahImage}
          alt=""
          className="h-[56px] w-[56px] rounded-full"
        />
        <div>
          <div className="font-medium">John Doe</div>
          <div>Senior Gardener Farmer</div>
        </div>
      </div>
    </div>
  );
};
const Testimonial = () => {
  let sliderRef = useRef<Slider>(null);

  const next = () => {
    //   @ts-ignore
    sliderRef.slickNext();
  };
  const previous = () => {
    //   @ts-ignore
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="app-width mt-32 overflow-hidden">
      <div className="flex justify-between items-end">
        <div className="max-w-[600px]">
          <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Our Causes
          </div>
          <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
            Join us in making a difference
          </h2>
        </div>
        <div className="flex gap-5">
          <div
            className="cursor-pointer flex items-center justify-center bg-[#00725E] h-[56px] w-[56px] rounded-full"
            onClick={previous}
          >
            <IoChevronBack color="white" />
          </div>
          <div
            className="cursor-pointer flex items-center justify-center bg-[#00725E] h-[56px] w-[56px] rounded-full"
            onClick={next}
          >
            <IoChevronForward color="white" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Slider
          ref={(slider) => {
            //   @ts-ignore
            sliderRef = slider;
          }}
          {...settings}
        >
          <Card key={1} />
          <Card key={2} />
          <Card key={3} />
          <Card key={4} />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
