import Aos from "aos";
import { useEffect } from "react";

const BottomBanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="learn_more"
      className="home-banner-2 min-h-[400px] rounded-[20px] max-w-[1100px] mx-auto flex justify-center items-center text-center text-white mt-20 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-[800px]">
        <h2
          className="font-bold text-[32px] md:text-[44px] lg:text-[64px]"
          data-aos="zoom-out"
        >
          Advancing Humanity in Every Human
        </h2>
        <div className="mt-3 font-medium">
          The SI Group is a collective dedicated to fostering progress and
          unlocking the potential within every Nigerian. We believe in the power
          of information, community engagement, and cultural heritage to propel
          individuals and our nation forward.
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
