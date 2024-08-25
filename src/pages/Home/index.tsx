import { Fragment } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import About from "./components/About";
import Footer from "../../components/Footer";
import AOS from "aos";

import { useEffect } from "react";
import { Button } from "@mantine/core";
import Achievement from "./components/Achievement";
import Causes from "./components/Causes";
import YoutubeEmbed from "./components/Youtube";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <div className="home-banner min-h-[70vh] md:min-h-screen flex items-center text-justify">
        <div className="app-width z-10 mt-[60px]">
          <div
            className="max-w-[1000px] px-5 lg:px-12 mx-auto text-white z-10"
            data-aos="zoom-in"
          >
            <h2 className="font-bold text-[24px] md:text-[32px] lg:text-[44px] text-center">
              Providing Support and
              <span className="text-primary"> Guidance </span>
              to Individuals and Communities
            </h2>
            <div className="mt-2 max-w-[500px] mx-auto text-center">
              The initiative recognises the challenges faced by these
              communities such as poverty and lack of educational opportunities,
              and aims to address these issues through a multi-faceted approach.
            </div>
            <div className="flex justify-center mt-5">
              <Button color="white" size="md" className="text-black">
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Achievement />
      <Causes />
      <YoutubeEmbed embedId="A-Zg1SFAacg" />
      <Testimonial />
      <Gallery />
      <Partners />
      <Footer />
    </Fragment>
  );
};

export default Home;
