import { Button } from "@mantine/core";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserIcon from "../../assets/svg/user.svg";
import FirstAidIcon from "../../assets/svg/f-aid.svg";
import DonateForm from "../Donate/DonateForm";
import { Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const GetInvolve = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - get involve</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <div className="home-banner min-h-[70vh] md:min-h-screen flex items-center">
        <div className="app-width z-10 mt-[60px]">
          <div
            className="max-w-[1000px] px-5 lg:px-12 mx-auto text-white z-10"
            data-aos="zoom-in"
          >
            <h2 className="font-bold text-[32px] md:text-[44px] lg:text-[64px] text-center">
              Join us to make A Change
            </h2>
            <div className="flex justify-center mt-5">
              <Button color="white" size="md" className="text-black">
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 app-width flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
            JOIN US
          </div>
          <div className="max-w-[600px]">
            <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
              Get Involved with BMCCI
            </h2>
          </div>
          <div className="mt-3">
            Beyond Mentors Community Care Initiatives (BMCCI) is devoted to the
            social, economic and educational development; counselling and
            mentoring of rural and urban communities in Northern Nigeria..
          </div>
          <div className="mt-3">
            It was first conceived, in 2007, out of the need to address and
            prevent poverty in Northern Nigeria targeting young minds from the
            cradle. It was registered as a social enterprise in 2013 and as a
            non-government and not for profit organization in 2017. Our primary
            targets are the most vulnerable and marginalized members of the
            society.
          </div>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row gap-5">
          <div className="flex-1 p-5 bg-[#00725E] text-white rounded-2xl  mn-h-[280px]">
            <div className="flex justify-center items-center bg-white rounded-full h-[54px] w-[54px]">
              <img src={UserIcon} alt="" />
            </div>
            <div className="mt-5 font-bold text-2xl">Volunteer</div>
            <div className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
          </div>
          <div className="flex-1 p-5 bg-[#00725E] text-white rounded-2xl  mn-h-[280px]">
            <div className="flex justify-center items-center bg-white rounded-full h-[54px] w-[54px]">
              <img src={FirstAidIcon} alt="" />
            </div>
            <div className="mt-5 font-bold text-2xl">Donate Hygiene Kits</div>
            <div className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
          </div>
        </div>
      </div>

      <DonateForm />
      <Footer />
    </Fragment>
  );
};

export default GetInvolve;
