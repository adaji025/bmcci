import { Button } from "@mantine/core";
import Aos from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Causes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-20 app-width overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 lg:gap-20">
        {/* <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Our Causes
          </div>
          <div className="max-w-[600px]">
            <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
              Join us in making a difference
            </h2>
          </div>
        </div> */}
        <div className="flex-1">
          <div className="text-justify">
            Ensuring education for all is very vital to the significant growth
            of the community in order to promote social change and growth.
          </div>
          <Button
            size="md"
            className="bg-primary hover:bg-primary/80 hidden lg:block mt-5 text-black"
            onClick={() => navigate("/donate")}
          >
            Donate Now
          </Button>
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="w-full causes-card min-h-[624px] rounded-xl flex flex-col p-5 text-white">
          <div className="z-10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px] mt-5">
                Rags To Riches (R2R) 2021 Graduation
              </h3>
              <div className="mt-3 text-justify">
                This serves as a platform for members to develop essential life
                skills and make informed choices for their futures. The R2R club
                focuses on several key areas, including leadership skills,
                entrepreneurship, morals, ethical values, and career paths.
                Through educational sessions and interactive workshops, club
                members are equipped with the knowledge and tools necessary to
                become future leaders and entrepreneurs. They learn about
                important values and ethical principles that guide their
                decision-making processes and personal development.
              </div>
            </div>
            <div>
              <Button
                color="white"
                className="text-black mt-6"
                onClick={() => navigate(`/causes/1`)}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full causes-card-1 min-h-[624px] rounded-xl flex flex-col p-5 text-white">
          <div className="z-10 h-2/3 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px] mt-5">Education </h3> 
              <div className="mt-3  text-justify">
                One of the main focuses of BMCCI is on education. The initiative
                aims to improve access to quality education for young minds from
                a very early age. This includes providing education and training
                programs, scholarships, and mentorship opportunities. By
                investing in the education of these individuals, BMCCI believes
                that they can break the cycle of poverty and contribute to the
                overall development of their communities.
              </div>
            </div>
            <div>
              <Button color="white" className="text-black mt-6">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full causes-card-2 min-h-[624px] rounded-xl flex flex-col p-5 text-white">
          <div className="z-10 h-2/3 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px] mt-5">
                Financial Literacy campaigns
              </h3>
              <div className="mt-3 text-justify">
                Financial Literacy campaigns and zero interest loan for small
                businesswomen and traders serves as a platform to Drive positive
                change for women while Creating a sustainable future for
                families through empowerment and livelihood enhancement.
              </div>
            </div>
            <div>
              <Button color="white" className="text-black mt-6">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
