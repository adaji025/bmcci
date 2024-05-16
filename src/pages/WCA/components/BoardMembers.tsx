import Iya from "../../../assets/png/board-members/Iya.png";
import Mallo from "../../../assets/png/board-members/mallo.png";
import Salim from "../../../assets/png/board-members/salim.png";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";

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
    name: "Machief Ayuba Mallo",
    image: Mallo,
    title: "Director of Programs",
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
      <img src={item.image} alt={item.name} />
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

  return (
    <div
      className="max-w-[1100px] mx-auto px-5 lg:px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12"
      data-aos="fade-up"
    >
      {data.map((item, index) => (
        <Board item={item} key={index} />
      ))}
    </div>
  );
};

export default BoardMembers;
