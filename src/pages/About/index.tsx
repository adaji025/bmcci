import Navbar from "../../components/Navbar";
import SubsidiaryImage from "../../assets/png/wc.png";
import BoardMembers from "./components/BoardMembers";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="app-width flex flex-col md:flex-row justify-between items-center gap-20 mt-32"
        data-aos="fade-up"
      >
        <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-2 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Who WE ARE
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px]">About BMCCI</h2>

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
          <div className="mt-3">
            Contents centre on how to utilize and make the best use of all the
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
      <BoardMembers />
    </div>
  );
};

export default About;
