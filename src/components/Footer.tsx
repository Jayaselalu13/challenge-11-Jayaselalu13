import React from 'react';
import InstagramIcon from '../assets/logo/Instagram.png';
import LinkedinIcon from '../assets/logo/Linkedin.png';

const Footer: React.FC = () => {
  return (
    <footer className='box-border flex flex-col md:flex-row md:justify-between justify-center items-center p-6 w-full bg-black border-t border-[#252B37] max-w-[1440px] mx-auto'>
      {/* Social Media Links */}
      <div className='flex flex-row items-center p-0 gap-4 w-24 h-10 md:order-1'>
        {/* Instagram Icon */}
        <div className='w-10 h-10 bg-black border border-[#252B37] rounded-full relative'>
          <img src={InstagramIcon} alt='instagram' />
        </div>

        {/* LinkedIn Icon */}
        <div className='w-10 h-10 bg-black border border-[#252B37] rounded-full relative'>
          <img src={LinkedinIcon} alt='LinkedIn' />
        </div>
      </div>

      {/* Terms & Conditions and Privacy Policy Links */}
      <div className='flex flex-row items-center px-4 gap-4 md:order-2 mt-6 md:mt-0'>
        <span className='text-sm font-normal text-[#A4A7AE] text-center font-sora leading-7'>
          Terms & Conditions
        </span>
        <span className='w-1 h-1 bg-[#D9D9D9] rounded-full'></span>
        <span className='text-sm font-normal text-[#A4A7AE] text-center font-sora leading-7'>
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
