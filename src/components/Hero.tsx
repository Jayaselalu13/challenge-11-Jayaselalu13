import React, { useState } from 'react';
import { useFloatingTechIcons } from '../hooks/useFloatingTechIcons';
import MobileMenu from './MobileMenu';
import backgroundImage from '../assets/images/background-xl.png';
import logoSymbol from '../assets/logo/logo-symbol.png';
import iconMenu from '../assets/logo/icon-menu.png';
import iconTailwind from '../assets/logo/icon-tailwind.png';
import iconFigma from '../assets/logo/icon-figma.png';
import iconReact from '../assets/logo/icon-react.png';
import iconHtml from '../assets/logo/icon-html.png';
import iconCss from '../assets/logo/icon-css.png';
import iconJs from '../assets/logo/icon-js.png';
import iconTrophy from '../assets/logo/icon-trophy.png';

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useFloatingTechIcons();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section
      className='relative min-h-[1024px] text-white overflow-x-hidden bg-cover bg-center bg-no-repeat max-w-[1440px] mx-auto'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Mobile View Version */}
      <div className='lg:hidden relative bg-cover bg-center h-[852px] w-full max-w-[393px] mx-auto pl-[20px] pt-[20px] pr-[20px]'>
        {/* Mobile Nav Bar */}
        <nav className='flex justify-between border rounded-full border-neutral-50 border-opacity-40 pl-[24px] pr-[24px] py-3'>
          <div className='flex items-center gap-[5px]'>
            <img src={logoSymbol} alt='logo' width='16' height='18' />
            <p className='text-white'>Search</p>
          </div>
          <div className='flex items-center'>
            <button id='button' onClick={toggleMenu}>
              <img src={iconMenu} alt='button' width='24' height='24' />
            </button>
          </div>
        </nav>

        {/* Mobile Technology Icons */}
        <div className='relative'>
          <div className='absolute pl-[24px] pt-[47px] tech-icon'>
            <img src={iconTailwind} alt='Tailwind' width='40' height='40' />
          </div>
          <div className='absolute right-[19px] top-6 tech-icon'>
            <img src={iconFigma} alt='Figma' width='52' height='52' />
          </div>
          <div className='absolute left-[24px] top-[607px] tech-icon'>
            <img src={iconReact} alt='React' width='55' height='55' />
          </div>
          <div className='absolute left-[181px] top-[584px] tech-icon'>
            <img src={iconHtml} alt='HTML' width='63' height='63' />
          </div>
          <div className='absolute right-[22px] top-[667px] tech-icon'>
            <img src={iconCss} alt='CSS' width='46' height='46' />
          </div>
        </div>

        {/* Mobile Container Center */}
        <div className='relative w-full h-full top-[60px]'>
          {/* Award Badge */}
          <div className='mx-auto mt-20 mb-8 flex justify-center'>
            <div className='relative'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-transparent'></div>
              <div className='box-border flex flex-row items-center py-1 px-4 gap-1.5 w-56 h-8 bg-[#0A0D12] rounded-full relative m-[1px]'>
                <div className='relative w-4 h-4 flex-none'>
                  <img src={iconTrophy} alt='Trophy' className='absolute' />
                </div>
                <span className="font-normal text-xs leading-6 text-center text-[#FDFDFD] w-[170px] h-6 flex-none font-['Sora']">
                  Top Bootcamp International
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Main Heading */}
          <div className='text-center mt-4 px-5'>
            <h1 className='text-white text-4xl font-bold leading-tight'>
              Become a{' '}
              <span className='text-blue-400'>
                Expert
                <br />
                Frontend
                <br />
                Developer
              </span>{' '}
              Who
              <br />
              Gets Hired!
            </h1>
          </div>

          {/* Mobile Subheading */}
          <div className='text-center mt-5 px-15'>
            <p className='text-white text-sm'>
              Learn real skills. Build real projects. Get real
              <br />
              results with expert mentorship.
            </p>
          </div>

          {/* Mobile Join Now Button */}
          <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
          <div className='mt-8 text-center px-5'>
            <button className='bg-[#0093DD] text-white font-medium py-3 rounded-full w-full hover:bg-blue-500 transition-colors'>
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View Version */}
      <div className='hidden lg:block min-h-screen relative overflow-hidden'>
        {/* Desktop Nav Bar */}
        <div className='container mx-auto px-4 py-6'>
          <nav className='flex justify-between items-center border rounded-full border-neutral-50 border-opacity-40 pl-[24px] pr-[24px] py-2'>
            <div className='flex items-center'>
              <div className='mr-10 flex items-center'>
                <img
                  src={logoSymbol}
                  alt='logo'
                  width='24'
                  height='24'
                  className='mr-2'
                />
                <span className='font-bold text-l'>Your Logo</span>
              </div>
              <ul className='flex space-x-10'>
                <li>
                  <a href='#' className='hover:text-blue-400 transition'>
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-400 transition'>
                    Module
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-400 transition'>
                    Testimony
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-400 transition pr-6'>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <button className='bg-[#0093DD] text-white font-medium py-2 px-8 rounded-full hover:bg-blue-500 transition'>
              Join Now
            </button>
          </nav>
        </div>

        {/* Desktop Technology Icons  */}
        <div className='relative container mx-auto h-screen'>
          {/* Tailwind Icon  */}
          <div
            className='absolute tech-icon 
                          md:left-[15%] md:top-[20%] 
                          lg:left-[17%] lg:top-[19%] 
                          xl:left-[19.38%] xl:top-[18.65%]'
          >
            <img
              src={iconTailwind}
              alt='Tailwind'
              className='md:w-[60px] md:h-[60px] 
                           lg:w-[70px] lg:h-[70px] 
                           xl:w-[80px] xl:h-[80px]'
            />
          </div>

          {/* Figma Icon  */}
          <div
            className='absolute tech-icon 
                          md:left-[75%] md:top-[21%] 
                          lg:left-[77%] lg:top-[20%] 
                          xl:left-[78.75%] xl:top-[19.73%]'
          >
            <img
              src={iconFigma}
              alt='Figma'
              className='md:w-[56px] md:h-[56px] 
                           lg:w-[65px] lg:h-[65px] 
                           xl:w-[73.9px] xl:h-[73.9px]'
            />
          </div>

          {/* React Icon  */}
          <div
            className='absolute tech-icon 
                          md:left-[18%] md:top-[65%] 
                          lg:left-[19%] lg:top-[67%] 
                          xl:left-[20.42%] xl:top-[68.75%]'
          >
            <img
              src={iconReact}
              alt='React'
              className='md:w-[75px] md:h-[75px] 
                           lg:w-[88px] lg:h-[88px] 
                           xl:w-[100px] xl:h-[100px]'
            />
          </div>

          {/* JavaScript Icon  */}
          <div
            className='absolute tech-icon 
                          md:left-[8%] md:top-[43%] 
                          lg:left-[1%] lg:top-[44.5%] 
                          xl:left-[10.21%] xl:top-[45.9%]'
          >
            <img
              src={iconJs}
              alt='JavaScript'
              className='md:w-[62px] md:h-[62px] 
                           lg:w-[72px] lg:h-[72px] 
                           xl:w-[83px] xl:h-[83px]'
            />
          </div>

          {/* HTML Icon  */}
          <div
            className='absolute tech-icon 
                          md:left-[77%] md:top-[52%] 
                          lg:left-[87%] lg:top-[53.5%] 
                          xl:left-[80.83%] xl:top-[54.79%]'
          >
            <img
              src={iconHtml}
              alt='HTML'
              className='md:w-[62px] md:h-[62px] 
                           lg:w-[72px] lg:h-[72px] 
                           xl:w-[82px] xl:h-[82px]'
            />
          </div>

          {/* CSS Icon  */}
          <div
            className='absolute tech-icon 
                          md:left-[61%] md:top-[65%] 
                          lg:left-[62.5%] lg:top-[67%] 
                          xl:left-[64.38%] xl:top-[68.46%]'
          >
            <img
              src={iconCss}
              alt='CSS'
              className='md:w-[49px] md:h-[49px] 
                           lg:w-[57px] lg:h-[57px] 
                           xl:w-[65px] xl:h-[65px]'
            />
          </div>

          {/* Desktop Main Content */}
          <div className='absolute top-[24rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl'>
            {/* Award Badge */}
            <div className='mx-auto mb-8 flex justify-center'>
              <div className='relative'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-[#0093DD]'></div>
                <div className='box-border flex flex-row items-center py-2 px-4 gap-2 w-64 bg-[#0A0D12] rounded-full relative m-[1px]'>
                  <div className='relative w-5 h-5 flex-none'>
                    <img src={iconTrophy} alt='Trophy' className='absolute' />
                  </div>
                  <span className="font-normal text-sm leading-6 text-center text-[#FDFDFD] flex-none font-['Sora']">
                    Top Bootcamp International
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Main Heading */}
            <h1 className='text-white text-6xl font-bold leading-tight'>
              Become an <span className='text-blue-400'>Expert Frontend</span>
              <br />
              <span className='text-blue-400'>Developer</span>{' '}
              <span className='text-white'>Who Gets Hired!</span>
            </h1>

            {/* Desktop Subheading */}
            <p className='text-white text-xl mt-8 mb-10'>
              Learn real skills. Build real projects. Get real results with
              expert mentorship.
            </p>

            {/* Desktop Join Now Button */}
            <button className='bg-[#0093DD] text-white font-medium py-4 px-16 rounded-full text-lg hover:bg-blue-500 transition'>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
