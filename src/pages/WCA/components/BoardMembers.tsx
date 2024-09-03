import adetoun from "../../../assets/png/board-members/adetoun.jpg";
import Salim from "../../../assets/png/board-members/maimoona.jpg";
import Mallo from "../../../assets/png/board-members/machief.jpg";
import Maimuna from "../../../assets/png/board-members/maimuna.jpeg";
import Rashida from "../../../assets/png/board-members/rashida.jpg";
import Jade from "../../../assets/png/board-members/jade.jpg";
import Ahmad from "../../../assets/png/board-members/ahmad.jpg";
import Kiya from "../../../assets/wca/iya.jpeg";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "../styles/wca.style.css";
import { useEffect } from "react";
import Aos from "aos";

const data = [
  {
    name: "Khadijah Abdullahi Iya",
    image: Kiya,
    title: "Founder",
  },
  {
    name: "Dr. Adetoun Dally",
    image: adetoun,
    title: "Global President ",
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
  {
    name: "Barr. Jade Olise ",
    image: Jade,
    title: "General Secretary ",
  },
  {
    name: "Dr Maimuna Abdullahi Habib ",
    image: Maimuna,
    title: "---",
  },
  {
    name: "Ahmad Muhammad ",
    image: Ahmad,
    title: "Secretariat",
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
      <img src={item.image} alt={item.name} className={`boardImg`} />
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
    <div>
    <div
      className="max-w-[1100px] mx-auto px-5 lg:px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 justify-center"
      data-aos="fade-up"
    >
    <div className="w-full text-center flex flex-col items-center justify-center">
      </div>
    <div className="w-full text-center flex flex-col items-center justify-center">
      <img src={Rashida} alt="Madam Rashida Apahade " className={`boardImg`} />
      <div className="font-semibold text-2xl mt-3">Madam Rashida Apahade </div>
      <div className="font-medium">WCA President (June 2022- June 2024)</div>
      <div className="flex gap-3 justify-center items-center mt-2">
        <FaFacebook />
        <FaXTwitter />
        <FaLinkedin />
      </div>
    <div className="w-full text-center flex flex-col items-center justify-center">
      </div>
    </div>
    </div>
    <div
      className="max-w-[1100px] mx-auto px-5 lg:px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 justify-center"
      data-aos="fade-up"
    >
      {data.map((item, index) => (
        <Board item={item} key={index} />
      ))}
    </div>
    </div>
  );
};

export default BoardMembers;
