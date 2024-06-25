import { Button } from "@mantine/core";
import AboutImage from "../../../assets/png/home-1.jpg";
import { useEffect } from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-20"
      data-aos="fade-up"
    >
      <div className="flex-1">
        <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          About Us
        </div>
        <h2 className="font-bold text-[32px] lg:text-[48px]">
          Beyond Mentors Community Care Initiatives{" "}
          <span className="text-primary">(BMCCI)</span>
        </h2>
        <div className="mt-3">
          We are devoted to the social, economic and educational development;
          counselling and mentoring of rural and urban communities in Northern
          Nigeria..
        </div>
        <div className="mt-3">
          Our community of about 15 civil societies (still growing) consists of
          legal Ngo’s, medical Ngos and some Governmental bodies from Gender
          Departments who are all part of our network.
        </div>
        <Button
          size="md"
          className="bg-primary hover:bg-primary/80 hidden lg:block mt-5 text-black"
          onClick={() => navigate("/about")}
        >
          Learn More
        </Button>
      </div>
      <div className="flex-1">
        <img src={AboutImage} alt="" />
      </div>
    </div>
  );
};

export default About;
