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

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="home-banner min-h-[70vh] md:min-h-screen flex items-center mt-[60px]">
        <div className="app-width">
          <div
            className="max-w-[1000px] px-5 lg:px-12 mx-auto text-white z-10"
            data-aos="zoom-in"
          >
            <h2 className="font-bold text-[32px] md:text-[44px] lg:text-[64px] text-center">
              <span className="text-primary">Women</span> the Epicenter of our
              society
            </h2>
            <div className="mt-1 font-medium max-w-[500px] mx-auto text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
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