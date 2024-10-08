import Iya from "../../../assets/wca/iya.jpeg";
// import Mallo from "../../../assets/png/board-members/mallo.png";
import Salim from "../../../assets/png/board-members/maimoona.jpg";
import Rafiu from "../../../assets/png/board-members/rafiu.png";
// import Mallo from "../../../assets/png/board-members/machief.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "../../WCA/styles/wca.style.css";
import { Fragment, useEffect } from "react";
import Aos from "aos";
import Slider from "react-slick";


  // {
  //   name: "Machief Ayuba Mallo",
  //   image: Mallo,
  //   title: "Director of Programs",
  // },

const data = [
  {
    name: "Khadijah Abdullahi Iya",
    image: Iya,
    title: "Founder",
  },
  {
    name: "Dr. Maimoona Salim",
    image: Salim,
    title: "Executive Director",
  },
  {
    name: "Dr. Rafiu Aderemi",
    image: Rafiu,
    title: "Executive Director",
  },
];

type IProps = {
  item: {
    name: string;
    image: string;
    title: string;
  };
};

const Board = ({ item }: IProps) => {
  return (
    <div className="w-full text-center flex flex-col items-center justify-center">
      <img src={item.image} alt={item.name} className="boardImg" />
      <div className="font-semibold text-2xl mt-3">{item.name}</div>
      <div className="font-medium">{item.title}</div>
      <div className="flex gap-3 justify-center items-center mt-2">
        <FaFacebook />
        <FaXTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
};

const BoardMembers = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <Fragment>
      <div className="mt-44 overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            BEHIND SI GROUP
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px]">
            Meet the Board
          </h2>
        </div>
      </div>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Board item={item} key={index} />
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default BoardMembers;
