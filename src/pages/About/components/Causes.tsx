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
        <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Our Causes
          </div>
          <div className="max-w-[600px]">
            <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
              Raise your funds for a cause you care
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <div>
            Ensuring education for all is very vital to the significant growth
            of the community in order to promote social change and growth,
          </div>
          <Button
            size="md"
            className="bg-primary hover:bg-primary/80 hidden lg:block mt-5 text-black"
            onClick={() => navigate("/about")}
          >
            Donate Now
          </Button>
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="w-full causes-card min-h-[424px] rounded-xl flex flex-col justify-center items-center p-5 text-white">
          <div className="z-10 flex h-2/3 flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px]">
                Rags To Riches (R2R) 2021 Graduation
              </h3>
              <div className="mt-3">
                Recently completed the second Rags to Riches (R2R) club day and
                graduation ceremony at the school without walls.
              </div>
            </div>
            <div>
              <Button color="white" className="text-black mt-6">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full causes-card-1 min-h-[424px] rounded-xl flex flex-col justify-center items-center p-5 text-white">
          <div className="z-10 h-2/3 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px]">Women Empowerment</h3>
              <div className="mt-3">
                Advocacy on the importance of education and how it relates to
                Islamic education
              </div>
            </div>
            <div>
              <Button color="white" className="text-black mt-6">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full causes-card-2 min-h-[424px] rounded-xl flex flex-col justify-center items-center p-5 text-white">
          <div className="z-10 h-2/3 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px]">
                Digitify Northern Nigeria
              </h3>
              <div className="mt-3">
                Free digital marketing skills training for Youths in Northern
                Nigeria, in line with the country’s vision to equip its youths
                with digital skills 
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

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="w-full causes-card min-h-[424px] rounded-xl flex flex-col justify-center items-center p-5 text-white">
          <div className="z-10 flex h-2/3 flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px]">
                Life Builders Initiative Durumi
              </h3>
              <div className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </div>
            </div>
            <div>
              <Button color="white" className="text-black mt-6">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full causes-card-1 min-h-[424px] rounded-xl flex flex-col justify-center items-center p-5 text-white">
          <div className="z-10 h-2/3 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px]">
                Life Builders Initiative Kunchigoro
              </h3>
              <div className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </div>
            </div>
            <div>
              <Button color="white" className="text-black mt-6">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full causes-card-2 min-h-[424px] rounded-xl flex flex-col justify-center items-center p-5 text-white">
          <div className="z-10 h-2/3 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[28px]">
                Digitify Northern Nigeria
              </h3>
              <div className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
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
