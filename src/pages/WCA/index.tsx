import { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar";
// import SubsidiaryImage from "../../assets/png/wc.png";
// import GeneralImage from "../../assets/others/general.jpg";
import Advocacy from "../../assets/wca/advocacy.jpg";
import Approach from "../../assets/wca/approach.webp";
// import GirlsImage from "../../assets/png/girls.png";
import Footer from "../../components/Footer";
import BoardMembers from "./components/BoardMembers";
import Gallery from "./components/Gallery";
import { Helmet } from "react-helmet";
import EventPopup from "./components/EventPopup";
// import Phylosophy from "./components/Phylosophy";

const WCA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - WCA</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar pageName={"wca"} />
      <div className="home-banner min-h-[70vh] md:min-h-screen flex items-center">
        <div className="app-width z-10 mt-[60px]">
          <div
            className="max-w-[1000px] px-5 lg:px-12 mx-auto text-white z-10"
            data-aos="zoom-in"
          >
            <h2 className="font-bold text-[32px] md:text-[44px] lg:text-[64px] text-center">
              Women Community in Africa (WCA)
            </h2>
          </div>
        </div>
      </div>

      <div
        className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-20"
        data-aos="fade-up"
      >
        <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            About WCA
          </div>
          <h2 className="font-bold text-[32px] lg:text-[40px]">
            <span className=" text-blue-600">The Advocacy Arm of </span>{" "}
            <br className="hidden xl:block" />
            <span className="text-primary">(BMCCI)</span>
          </h2>
          <div className="mt-3 text-[20px] text-justify">
            Women Community in Africa (WCA) is the advocacy arm of Beyond
            Mentors Community Care Initiatives, and a coalition of
            Non-Governmental Organisations(NGOs) and Civil Societal
            Organisations (CSOs) which was established to identify, amplify, and
            address issues which inhibits and affect the sustainable development
            of the African women and children; charting a legacy of solutions on
            the devastating social issues especially Issues of Gender Based
            Violence (GBV) against women and children.
          </div>
          <div className="mt-3 text-[20px] text-justify">
            Women Community in Africa (WCA), has recorded lots of great strides
            in identifying and advocating against a variety of societal wrongs
            and proffering solutions.
          </div>
        </div>
        <div className="flex-1">
          <img src={Advocacy} alt="" className="advocacyImg" />
        </div>
      </div>

      {/* <Phylosophy /> */}

      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium">
            Philosophy
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center text-blue-600">
            Empowering women, Enriching lives
          </h2>
        </div>
        <div className="mt-10 max-w-[840px] mx-auto text-[20px] text-justify">
          <div>
            Literacy is a key tool to unlock potentials. Education and
            self-discovery are the most important components to unlocking
            individual potential, and we aim to inspire women, girls, and youth
            to find their voices and pursue their dreams.
          </div>
          <div className="mt-5 text-[20px] text-justify">
            Understanding Human rights as a universal and inalienable is also
            key as we advocate for the rights of women, girls, and youth to be
            respected, protected, and fulfilled
          </div>
        </div>
      </div>

      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium">
            Principles
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center text-blue-600">
            Our Guiding Principles
          </h2>
        </div>
        <div className="mt-10 max-w-[840px] mx-auto text-[20px] text-justify">
          <div>
            <span className="text-red-600 font-bold">We Collaborate:</span> We
            believe in the power of collective action and partnership to drive
            meaningful change.
          </div>
          <div className="mt-5">
            <span className="text-green-600 font-bold">We Empower:</span> We
            strive to empower women, girls, and youth to take ownership of their
            lives and communities.
          </div>
          <div className="mt-5">
            <span className="text-blue-600 font-bold">We are Inclusive:</span>
            We embrace the potential of diversity and promote equal
            opportunities for all, regardless of background or circumstances.
          </div>
          <div className="mt-5">
            <span className="text-black font-bold">
              We do not compromise Social Justice:
            </span>{" "}
            as we commit to addressing the root causes of gender-based violence
            and promoting human rights for all.
          </div>
        </div>
      </div>

      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium">
            Core Beliefs
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center text-blue-600">
            Our Core Beliefs
          </h2>
        </div>
        <div className="mt-10 max-w-[840px] mx-auto text-[20px] text-justify">
          <div>
            Gender equity is a fundamental human right, and we strive to create
            a world where women and girls can thrive without fear of violence or
            discrimination.
          </div>
          <div className="mt-5">
            Magnifying our voices as a collective via Community-led solutions
            are the most effective way to drive lasting change, and we work
            hand-in-hand with grassroots organisations to co-create a brighter
            future for our generations to come.
          </div>
        </div>
      </div>

      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium">
            Impact
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center text-blue-600">
            Our approach to sustainable impact
          </h2>
        </div>
        <div className="mt-10 max-w-[840px] mx-auto text-[20px] text-justify">
          <div>
            In 2018, we hosted a summit on Child Sexual Abuse in partnership
            with Girls Not Brides UK, followed by a six-month campaign to end
            child marriage, culminating in a summit on 26 May 2022. Our summits
            are not mere talking shops; instead, we bring stakeholders together
            to develop solutions, documented in a communiqué that outlines
            actionable steps to address our findings. This approach has enabled
            us to impact over 25,000 women, children, and young people
            conservatively over the years.
          </div>
          <div className="mt-5">
            In 2023, we shifted our focus to the boy child. Whilst our coalition
            members, Women Community in Africa, and other Non-Governmental
            Organisations have primarily concentrated on the girl child, we
            recognise that neglecting the boy child could undermine our
            progress. One boy child can potentially undo the gains made for the
            girl child, as boys and men often perpetrate the dangers faced by
            girls. Therefore, we believe it is essential to give equal attention
            to the boy child.
          </div>
          <div className="mt-5">
            The most effective solution is to nurture and re-engineer the boy
            child to embrace values that align with our mission, enabling them
            to collaborate with us and understand the importance of protecting
            and developing every girl child. When girl children are
            well-developed- mentally, intellectually, and financially - they
            become a vast, resourceful ecosystem that supports the sustainable
            development goals in their communities.
          </div>
        </div>

        <div className="mt-10">
          <img src={Approach} alt="" className="rounded-[20px] mx-auto" />
        </div>

        <div className="mt-20 max-w-[840px] mx-auto text-[20px] text-justify">
          <div>
            Our campaign focusing on the boy child culminated in a physical
            summit, where esteemed individuals from society gathered to engage
            with over 250 boys. The summit was carefully planned with specific
            outcomes in mind, including:
          </div>
          <div className="mt-5">
            <ul className="list" style={{ listStyle: "disc" }}>
              <li>Continued advocacy for the boy child</li>
              <li>
                Support for coalition members running similar campaigns in their
                communities
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium">
            The Board
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center text-blue-600">
            Meet the General Assembly
          </h2>
        </div>
      </div>

      <BoardMembers />
      <Gallery />
      <Footer
        data={{ email: "admin.wca@sigroupint.org", phone: "+234 912 097 9281" }}
      />
      {/* Event Pop-up */}
      <EventPopup />
    </Fragment>
  );
};

export default WCA;
