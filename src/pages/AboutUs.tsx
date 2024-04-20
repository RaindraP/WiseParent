import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShortDesc from "../components/Section/ShortDesc";
import WhatWeOffer from "../components/Section/WhatWeOffer";

const AboutUs = () => {
  return (
    <>
      <Navbar theme="light" selected="about" />

      <ShortDesc />

      <WhatWeOffer />

      <div className="bg-primary200 mt-10">
        <div className="mb-10 lg:mb-20 p-10 rounded-l-xl rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right text-center">
          <p className="text-3xl font-bold">Contact Us</p>
          <p className="mt-2 mb-6 !text-base font-normal text-gray-700">
            Contact our team below for further information
          </p>
          <div className="flex flex-row gap-4 justify-center ">
            <button className="flex-shrink-0 text-white bg-primary900 py-3 px-8 rounded-lg">
              <div className="flex flex-row gap-2 align-middle justify-center">
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                <p className="font-bold text-sm">WHATSAPP</p>
              </div>
            </button>
            <button className="flex-shrink-0 text-white bg-primary900  py-3 px-8 rounded-lg">
              <div className="flex flex-row gap-2 align-middle justify-center">
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                <p className="font-bold text-sm">EMAIL</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
