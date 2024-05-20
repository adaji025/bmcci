import { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Button, TextInput, Textarea } from "@mantine/core";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BMCCI - Contact us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <div className="mt-44 app-width flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1">
          <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
            JOIN US
          </div>
          <div className="max-w-[600px]">
            <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
              We’d love to hear from you
            </h2>
          </div>
          <div className="mt-3">
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </div>
          <div className="mt-3">
            Kindly reach out to us using any of the medium and we will be sure
            to get back to you.
          </div>
        </div>
        <div className="flex-1 bg-[#00725E] px-5 sm:px-20 py-8 rounded-[20px] text-white">
          <h3 className="font-bold text-2xl">Let's talk!</h3>
          <div className="inline-flex flex-wrap gap-5 mt-3 border-b-2 border-[#E5E5E5] pb-3">
            <div>+234 813 590 6580</div>
            <div>hello@largerthani.com</div>
          </div>
          <h3 className="font-bold text-2xl mt-6">Headoffice</h3>
          <div className="mt-2 max-w-[300px]">
            No 9 otuoke street, off Gimbiya street, Area 11, Garki Abuja
          </div>
          <div className="mt-6 flex gap-2">
            <FaXTwitter color="white" />
            <FaFacebook color="white" />
            <FaLinkedin color="white" />
          </div>
        </div>
      </div>

      <div className="app-width mt-32">
        <div className="bg-[#92CD0033]/20 px-5 py-3 mb-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Have a message for us?
        </div>
        <div className="max-w-[600px]">
          <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
            Kindly fill the form below to get started
          </h2>
        </div>

        <div className="mt-10 lg:w-2/3 grid sm:grid-cols-2 gap-5">
          <TextInput size="md" label="First Name" placeholder="Type here..." />
          <TextInput size="md" label="Last Name" placeholder="Type here..." />

          <TextInput
            size="md"
            label="Phone Number"
            placeholder="Type here..."
          />

          <TextInput
            type="email"
            size="md"
            label="Email Address"
            placeholder="Type here..."
          />
          <Textarea size="xl" label="Message" className="sm:col-span-2" />
        </div>
        <Button
          size="md"
          className="bg-primary hover:bg-primary/80 hidden lg:block mt-5 text-black"
        >
          Send Message
        </Button>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Contact;
