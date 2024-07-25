import { Button } from "@mantine/core";
import Logo from "../assets/svg/logo.svg";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] mt-[240px] text-white" data-aos="fade-up">
      <div className="px-10">
        <div
          id="learn_more"
          className="home-banner-2 min-h-[400px] rounded-[20px] max-w-[1100px] mx-auto flex justify-center items-center text-center text-white mt-20 overflow-hidden -translate-y-[180px]"
        >
          <div className="">
            <h2
              className="font-bold text-[32px] md:text-[32px] lg:text-[48px] max-w-[450px] mx-auto"
              data-aos="zoom-out"
            >
              Join us to make a change
            </h2>
            <div className="mt-3 flex items-center justify-center gap-4">
              <Button
                size="md"
                className="bg-primary hover:bg-primary/80 block mt-5 text-black"
                // onClick={() => navigate("/about")}
              >
                Join as a volunteer
              </Button>
              <Button size="md" color="white" className="text-black mt-6">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="app-width grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 -translate-y-[60px] overflow-hidden">
        <div>
          <img src={Logo} alt="" />
        </div>

        <div>
          <h4 className="font-bold">Home</h4>
          <div className="grid gap-3 font-medium text-[#D0DAF5] mt-5">
            <div>About us</div>
            <div>Team</div>
            <div>Get Involved</div>
            <div>BML</div>
            <div>Contact</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold">More</h4>
          <div className="grid gap-3 font-medium text-[#D0DAF5] mt-5">
            <div>Projects</div>
            <div>Events</div>
            <div>Donate</div>
            <div>Annual Report</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Connect</h4>
          <div className="grid gap-3 font-medium text-[#D0DAF5] mt-5">
            <div>
              <a href="https://www.facebook.com/wcasummit" target="_blank">
                Facebook
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/wcasummit?igsh=MjdyZjYwa3dsdDU4"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div>Twitter</div>
            <div>
              <a href="https://www.linkedin.com/company/women-community-in-africa-summit/">
                Linkedin
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Join Us</h4>
          <div className="grid gap-3 font-medium text-[#D0DAF5] mt-5">
            <div className="flex gap-2 items-center">
              <IoMailOutline />
              <div className="">womencommunityinafricawca<br className="hidden lg:block" />@gmail.com</div>
            </div>
            <div className="flex gap-2 items-center">
              <LuPhone />
              <div>09120979281 </div>
            </div>
            <div className="flex gap-2 items-start">
              <IoLocationOutline />
              <div>
                No 9, Otuoke street, <br /> off Gimbiya street, <br /> Area 11,
                Garki Abuja
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app-width">
        <hr />
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 py-5">
          <div>Copyright © BMCCI.org</div>
          <div>
            All Rights Reserved |{" "}
            <span className="text-primary">
              Terms and Conditions | Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
