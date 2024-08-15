import { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Button, CopyButton } from "@mantine/core";
import { IoCopyOutline } from "react-icons/io5";
import DonateForm from "./DonateForm";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - Donate</title>
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
              Join us in making a difference
            </h2>
            <div className="mt-1 font-medium max-w-[500px] mx-auto text-center">
              Your donations will go a long way, donate today!
            </div>
            <div className="flex justify-center mt-5">
              <Button color="white" size="md" className="text-black">
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 app-width">
        <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Donate Here
        </div>
        <div className="max-w-[600px]">
          <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
            Our Account Details
          </h2>
        </div>
        <div className="p-5 border bg-[#F9FAFB] max-w-[600px] rounded-xl mt-6">
          <div className="flex justify-between">
            <h2 className="font-bold">Direct Bank Transfer</h2>
            <CopyButton value="1223718233">
              {({ copied, copy }) => (
                <button color={copied ? "teal" : "blue"} onClick={copy}>
                  {copied ? `copied 1223718233` : <IoCopyOutline />}
                </button>
              )}
            </CopyButton>
          </div>
          <div className="grid gap-3 mt-5">
            <div className="flex justify-between gap-20">
              <div className="w-1/3">
                <div>Account Name </div>
              </div>
              <div className="flex-1">
                <div>Beyond Mentors Community Care Initiative</div>
              </div>
            </div>
            <div className="flex justify-between gap-20">
              <div className="w-1/3">
                <div>Account Number</div>
              </div>
              <div className="flex-1">
                <div>1223718233</div>
              </div>
            </div>
            <div className="flex justify-between gap-20">
              <div className="w-1/3">
                <div>Bank Name</div>
              </div>
              <div className="flex-1">
                <div>Zenith Bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DonateForm />
      <Footer />
    </Fragment>
  );
};

export default Donate;
