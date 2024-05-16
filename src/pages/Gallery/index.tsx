import Navbar from "../../components/Navbar";
import G1 from "../../assets/png/gallery/gallery1.png";
import G2 from "../../assets/png/gallery/gallery2.png";
import G3 from "../../assets/png/gallery/gallery3.png";
import G4 from "../../assets/png/gallery/gallery4.png";
import G5 from "../../assets/png/gallery/gallery5.png";
import G6 from "../../assets/png/gallery/gallery6.png";
import Footer from "../../components/Footer";
import { Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet";

type IProps = {
  item: {
    text: string;
    image: string;
  };
};

const Card = ({ item }: IProps) => {
  return (
    <div className="w-full relative">
      <img
        src={item.image}
        alt=""
        className="rounded-[20px] min-h-[600px] object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 rounded-b-[20px] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
        {item.text}
      </div>
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
  ];
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
        <div className="mt-10 grid sm:grid-cols-2 gap-5 sm:gap-10">
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
