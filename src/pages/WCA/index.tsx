import { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SubsidiaryImage from "../../assets/png/wc.png";
import GirlsImage from "../../assets/png/girls.png";
import Footer from "../../components/Footer";
import BoardMembers from "./components/BoardMembers";
import Gallery from "./components/Gallery";
import { Helmet } from "react-helmet";
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
          <div className="mt-3">
            Women Community in Africa (WCA) is the advocacy arm of Beyond
            Mentors Community Care Initiatives, and a coalition of
            Non-Governmental Organisations(NGOs) and Civil Societal
            Organisations (CSOs) which was established to identify, amplify, and
            address issues which inhibits and affect the sustainable development
            of the African women and children; charting a legacy of solutions on
            the devastating social issues especially Issues of Gender Based
            Violence (GBV) against women and children.
          </div>
          <div className="mt-3">
            Women Community in Africa (WCA), has recorded lots of great strides
            in identifying and advocating against a variety of societal wrongs
            and proffering solutions.
          </div>
        </div>
        <div className="flex-1">
          <img src={SubsidiaryImage} alt="" />
        </div>
      </div>

      {/* <Phylosophy /> */}

      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium">
            Philosophy
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center text-blue-600">
            Empowering Women, Enriching Communities: Unlocking the Potential
            Within
          </h2>
        </div>
        <div className="mt-10 max-w-[840px] mx-auto">
          <div>
            Literacy is a key tool to unlock potentials. Education and
            self-discovery are the most important components to unlocking
            individual potential, and we aim to inspire women, girls, and youth
            to find their voices and pursue their dreams.
          </div>
          <div className="mt-5">
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
        <div className="mt-10 max-w-[840px] mx-auto">
          <div>
            We Collaborate: We believe in the power of collective action and
            partnership to drive meaningful change.
          </div>
          <div className="mt-5">
            We Empower: We strive to empower women, girls, and youth to take
            ownership of their lives and communities.
          </div>
          <div className="mt-5">
            We are Inclusive: We embrace the potential of diversity and promote
            equal opportunities for all, regardless of background or
            circumstances.
          </div>
          <div className="mt-5">
            We do not compromise Social Justice: as we commit to addressing the
            root causes of gender-based violence and promoting human rights for
            all.
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
        <div className="mt-10 max-w-[840px] mx-auto">
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
        <div className="mt-10 max-w-[840px] mx-auto">
          <div>
            In 2018, we had a summit on Child Sexual Abuse which is in
            partnership with Girls Not Brides UK, had a six (6) months campaign
            on ending child marriage, which was also concluded with a summit on
            the 26th day of May 2022. Our Summits are not talk shops, when we
            bring stakeholders together we come up with solutions documented in
            a communique that directs and activates our expected outcomes to act
            upon our discoveries
          </div>
          <div className="mt-5">
            Which has enabled us to impact on more than 25000 conservatively;
            women children and youth accordingly over the years.In 2023, we turn
            to the BOY CHILD, our coalition-members of Women Community In Africa
            and other Non-Governmental Institutions had more than focused on the
            girl child, we believe that if we do not give enough or equal
            attention to the boy children, one boy child can destroy a
            generation of all the work done on the girl child. Most of the
            dangers faced by the girls are perpetrated by the boy-child/Men.
          </div>
        </div>

        <div className="mt-10">
          <img src={GirlsImage} alt="" className="rounded-[20px] mx-auto" />
        </div>

        <div className="mt-20 max-w-[840px] mx-auto">
          <div>
            The best solution is to groom and re-engineer the boy child to value
            so that they can collaborate with our work and understand the
            significance of protecting developing every girl child, as society
            thrives when girl children are well developed; mentally,
            intellectually and financially they become huge resourceful
            ecosystem that supports the sustainable development goals for their
            various communities.
          </div>
          <div className="mt-5">
            Our boy child campaign culminated in a physical summit, where
            notable individuals from society came together to speak to over 250
            boys. The summit was planned with specific outcomes in mind,
            including continued advocacy for the boy child and support for
            coalition members who are running similar campaigns in their
            communities."
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
        data={{ email: "wca@simagazineng.com", phone: "+234 912 097 9281" }}
      />
    </Fragment>
  );
};

export default WCA;
