import { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GirlsImage from "../../assets/png/girls.png";
import EditImage from "../../assets/svg/Edit Square.svg";
import DocImage from "../../assets/svg/doc.svg";
import CategoryImage from "../../assets/svg/Category.svg";
import DiscoveryImage from "../../assets/svg/Discovery.svg";
import Causes from "../Home/components/Causes";
import { Helmet } from "react-helmet";

const CausesDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - Causes</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Causes
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px] max-w-[682px] mx-auto text-center">
            Rags To Riches (R2R) 2021 Graduation
          </h2>
        </div>
        <div className="mt-10 max-w-[840px] mx-auto">
          <div>
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </div>
          <div className="mt-5">
            Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
            sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
            volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim
            a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
            arcu sed elit scelerisque tempor ornare tristique. Integer faucibus
            duis praesent tempor feugiat ornare in. Erat libero egestas
            porttitor nunc pellentesque mauris et pulvinar eget.
          </div>
        </div>

        <div className="mt-10">
          <img src={GirlsImage} alt="" className="rounded-[20px] mx-auto" />
        </div>

        <div className="mt-20 max-w-[840px] mx-auto">
          <div>
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id.
          </div>
          <div className="mt-5">
            Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
            sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
            volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim
            a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
            arcu sed elit scelerisque tempor ornare tristique. Integer faucibus
            duis praesent tempor feugiat ornare in. Erat libero egestas
            porttitor nunc pellentesque mauris et pulvinar eget.
          </div>
        </div>
      </div>
      <div className="mt-44 bg-primary py-20">
        <div className="app-width grid sm:grid-cols-2 gap-20">
          <div className="flex-1">
            <div className="flex gap-2">
              <div>
                <img src={EditImage} alt="" className="mt-1" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  20+ orphanage visit in 2 months
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-2">
              <div>
                <img src={CategoryImage} alt="" className="mt-1" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  230 People Have donated
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-2">
              <div>
                <img src={DocImage} alt="" className="mt-1" />
              </div>
              <div>
                <div className="text-2xl font-bold">30+ people joined</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-2">
              <div>
                <img src={DiscoveryImage} alt="" className="mt-1" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  1.2m Raised for this initiate
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Causes />
      <Footer />
    </Fragment>
  );
};

export default CausesDetails;
