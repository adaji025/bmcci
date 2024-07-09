import Navbar from "../../components/Navbar";
import G1 from "../../assets/png/gallery-1/gallery-1 (1).jpg";
import G2 from "../../assets/png/gallery-1/gallery-1 (2).jpg";
import G3 from "../../assets/png/gallery-1/gallery-1 (3).jpg";
import G4 from "../../assets/png/gallery-1/gallery-1 (4).jpg";
import G5 from "../../assets/png/gallery-1/gallery-1 (5).jpg";
import G6 from "../../assets/png/gallery-1/gallery-1 (6).jpg";
import G7 from "../../assets/png/gallery-1/gallery-1 (7).jpg";
import G8 from "../../assets/png/gallery-1/gallery-1 (8).jpg";
import G9 from "../../assets/png/gallery-1/gallery-1 (9).jpg";

import G10 from "../../assets/png/gallery-2/gallery-2 (1).jpg";
import G11 from "../../assets/png/gallery-2/gallery-2 (2).jpg";
import G12 from "../../assets/png/gallery-2/gallery-2 (3).jpg";
import G13 from "../../assets/png/gallery-2/gallery-2 (4).jpg";
import G14 from "../../assets/png/gallery-2/gallery-2 (5).jpg";
import G15 from "../../assets/png/gallery-2/gallery-2 (6).jpg";
import G16 from "../../assets/png/gallery-2/gallery-2 (7).jpg";
import G17 from "../../assets/png/gallery-2/gallery-2 (8).jpg";
import G18 from "../../assets/png/gallery-2/gallery-2 (9).jpg";
import G19 from "../../assets/png/gallery-2/gallery-2 (10).jpg";

import G20 from "../../assets/png/gallery-3/gallery-3 (1).jpg";
import G21 from "../../assets/png/gallery-3/gallery-3 (2).jpg";
import G22 from "../../assets/png/gallery-3/gallery-3 (3).jpg";
import G23 from "../../assets/png/gallery-3/gallery-3 (4).jpg";
import G24 from "../../assets/png/gallery-3/gallery-3 (5).jpg";
import G25 from "../../assets/png/gallery-3/gallery-3 (6).jpg";

import Footer from "../../components/Footer";
import { Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type IProps = {
  item: {
    text: string;
    image: string;
  };
};

const Card = ({ item }: IProps) => {
  return (
    <div className="w-full max-h-[300px] h-full relative">
      <Zoom>
        <img
          src={item.image}
          alt=""
          className="rounded-[20px] min-h-[300px] h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 rounded-b-[20px] text-[20px] font-bold">
          {item.text}
        </div>
      </Zoom>
    </div>
  );
};

const Gallery = () => {
  const data = [
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G1,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G2,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G3,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G4,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G5,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G6,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G7,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G8,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G9,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G10,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G11,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G12,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G13,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G14,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G15,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G16,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G17,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G18,
    },
    {
      text: "Rags To Riches (R2R) 2021 Graduation",
      image: G19,
    },
    {
      text: "WCA Distributes Free Covid Kit",
      image: G20,
    },
    {
      text: "WCA Distributes Free Covid Kit",
      image: G21,
    },
    {
      text: "WCA Distributes Free Covid Kit",
      image: G22,
    },
    {
      text: "WCA Distributes Free Covid Kit",
      image: G23,
    },
    {
      text: "WCA Distributes Free Covid Kit",
      image: G24,
    },
    {
      text: "WCA Distributes Free Covid Kit",
      image: G25,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - Gallery</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <div className="mt-44 app-width">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
            Gallery
          </div>
          <h2 className="font-bold text-[32px] lg:text-[48px]">
            Our Campaigns in Pictures
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-4 gap-5 sm:gap-10">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Gallery;
