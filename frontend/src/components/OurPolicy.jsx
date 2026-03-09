import React from 'react';
import { assets } from '../assets/assets';
import SectionWrapper from './SectionWrapper'; // import the wrapper

const OurPolicy = () => {
  return (
    <SectionWrapper className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Easy exchange policy</p>
        <p className="text-gray-400">WE OFFER HASSLE FREE EXCHANGE POLICY</p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Return policy</p>
        <p className="text-gray-400">Hassle free return policy</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Customer support</p>
        <p className="text-gray-400">24/7 customer support</p>
      </div>
    </SectionWrapper>
  );
};

export default OurPolicy;