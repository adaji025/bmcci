import Navbar from "../../components/Navbar";
import SubsidiaryImage from "../../assets/png/gallery-3/gallery-3 (1).jpg";
import BoardMembers from "./components/BoardMembers";
import Partners from "../Home/components/Partners";
import Footer from "../../components/Footer";
import GirlsImage from "../../assets/png/girls.png";
import Mission from "./components/Mission";
import Causes from "./components/Causes";
import { Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <div
        className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-32"
        data-aos="fade-up"
      >
        <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Who We Are
          </div>
          {/* <h2 className="font-bold text-[32px] lg:text-[48px]">About BMCCI</h2> */}

          <div className="mt-3 text-justify">
            Beyond Mentors Community Care Initiatives (BMCCI) is devoted to the
            social, economic and educational development; counselling and
            mentoring of rural and urban communities in Northern Nigeria..
          </div>
          <div className="mt-3 text-justify">
            It was first conceived, in 2007, out of the need to address and
            prevent poverty in Northern Nigeria targeting young minds from the
            cradle. It was registered as a social enterprise in 2013 and as a
            non-government and not for profit organization in 2017. Our primary
            targets are the most vulnerable and marginalized members of the
            society.
          </div>
          <div className="mt-3 text-justify">
            Content in curriculum are centred on how to utilise and make the best use of all the
            financial tools available yet enabling leadership skills and life
            skills to prepare women, children and youth to make better and
            informed choices and obtaining life skills along the way. It is an
            exclusive initiative and a first of its kind in the Northern
            Nigeria.
          </div>
        </div>
        <div className="flex-1">
          <img src={SubsidiaryImage} alt="" className="rounded-xl" />
        </div>
      </div>

      <div className="app-width">
        <div className="mt-32 px-5 bg-primary min-h-[540px] w-full rounded-xl flex flex-col justify-center items-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            WHAT WE HAVE DONE
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[600px] mx-auto text-center">
            Impact over the last 17 years
          </h2>
          <div className="mt-3 max-w-[800px] mx-auto text-justify">
            The organisation has been contributing to the social and educational
            development, counselling and mentoring of rural and urban communities
            particularly in the secondary schools and sanitary education,
            community mobilisation especially mobilising girl-child education,
            setting up financial literacy clubs for secondary schools, economic
            and overall empowerment of the less-privileged, orphans and
            vulnerable groups in the society.
          </div>
        </div>
        <div className="hidden xl:block xl:-translate-y-[70px]">
          <img src={GirlsImage} alt="" className="mx-auto" />
        </div>
      </div>
      <Mission />
      <Causes />
      <BoardMembers />
      <Partners />
      <Footer />
    </Fragment>
  );
};

export default About;
