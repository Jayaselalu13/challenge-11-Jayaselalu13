// src/components/TrustedPartners.tsx
import React from 'react';
import { useTrustedPartners } from '../hooks/useTrustedPartners';

const TrustedPartners: React.FC = () => {
  const { mobileLogos, desktopLogos, content } = useTrustedPartners();

  return (
    <section className='relative bg-white py-12 md:py-16 lg:py-20 max-w-[1440px] mx-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-xl font-extrabold text-[#0A0D12] sm:text-2xl md:text-3xl lg:text-4xl'>
            {content.title}
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-sm md:text-base text-[#252B37] sm:mt-4'>
            {content.description}
          </p>
        </div>

        {/* Mobile view with dot indicators */}
        <div className='mt-10 flex flex-wrap justify-center gap-8 md:hidden'>
          {mobileLogos.map((logo, index) => (
            <div key={`mobile-${index}`} className='flex justify-center'>
              <img src={logo.src} alt={logo.alt} className='h-8' />
            </div>
          ))}

          {/* Dot indicators for mobile */}
          <div className='flex flex-row items-center gap-2 w-full justify-center mt-6'>
            <div className='w-[6px] h-[6px] rounded-full bg-[#0093DD]' />
            <div className='w-[6px] h-[6px] rounded-full bg-[#D5D7DA]' />
            <div className='w-[6px] h-[6px] rounded-full bg-[#D5D7DA]' />
          </div>
        </div>

        {/* Desktop view with all logos */}
        <div className='hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-8 lg:gap-16 mt-12 lg:mt-16'>
          {desktopLogos.map((logo, index) => (
            <div key={`desktop-${index}`} className='flex justify-center'>
              <img src={logo.src} alt={logo.alt} className='h-8 lg:h-10' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
