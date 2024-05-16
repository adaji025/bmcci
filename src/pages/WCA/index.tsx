import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import SubsidiaryImage from "../../assets/png/wc.png";
import GirlsImage from "../../assets/png/girls.png";
import Footer from "../../components/Footer";
import BoardMembers from "./components/BoardMembers";
import Gallery from "./components/Gallery";
import { Helmet } from "react-helmet";

const WCA = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - WCA</title>
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
              Women Community in Africa (wCA)
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
            The Advocacy Arm of <br className="hidden xl:block" />
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

      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium">
            Impact
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center">
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

      <BoardMembers />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default WCA;
