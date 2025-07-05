import React from 'react';
import orbitImg from '../assets/logo/orbit.png';
import provenImg from '../assets/images/Image-proven.png';
import globeBgImg from '../assets/images/globe-bg.png';
import jsImg from '../assets/images/js-image.png';
import reactImg from '../assets/images/react-image.png';
import cssImg from '../assets/images/css-image.png';
import htmlImg from '../assets/images/html-image.png';
import tailwindImg from '../assets/images/tailwind-image.png';
import figmaImg from '../assets/images/figma-image.png';
import videoImg from '../assets/images/video-image.png';
import playIcon from '../assets/logo/Play-icon.png';
import blueIcon from '../assets/logo/blue-icon.png';

const CodingJourneySection: React.FC = () => {
  return (
    <section className='min-h-screen bg-white w-full py-12 md:py-20 max-w-[1440px] mx-auto'>
      <div className='container mx-auto px-5 md:px-8 lg:px-12 xl:px-6 max-w-7xl'>
        {/* Header Section - Always on top and separate */}
        <div className='flex flex-col items-center gap-6 mb-8 lg:mb-12'>
          <h1 className='text-2xl md:text-4xl font-extrabold text-center text-[#0A0D12] leading-tight md:leading-snug'>
            Your Coding Journey Simplified
          </h1>
          <p className='text-sm md:text-lg text-center text-[#252B37] leading-7 md:max-w-2xl'>
            Everything you need to become a job-ready developer expert guidance,
            hands-on projects, and real career results
          </p>
        </div>

        {/* Main content grid */}
        <div className='md:col-span-6 lg:col-span-12 grid md:grid-cols-5 lg:grid-cols-12 gap-6 md:gap-7 lg:gap-8'>
          {/* Master Coding Section */}
          <div className='md:col-span-3 lg:col-span-7 bg-white rounded-2xl border border-[#e9eaeb] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 h-full min-h-[360px] max-h-[400px]'>
            <div className='flex flex-col h-full'>
              <div className='flex flex-col items-start gap-2 mb-6'>
                <h2 className='text-lg md:text-2xl font-bold text-[#0A0D12] leading-tight'>
                  Master Coding, Land Your Dream Job!
                </h2>
                <p className='text-sm md:text-base text-[#0A0D12] leading-7 pb-8'>
                  Learn job-ready skills with real-world projects and expert
                  mentorship
                </p>
              </div>
              {/* Master coding Orbit */}
              <div className='relative mt-auto object-bottom'>
                <img src={orbitImg} alt='orbit' className='object-bottom' />
              </div>
            </div>
          </div>

          {/* Proven Results Section */}
          <div className='md:col-span-2 lg:col-span-5 bg-white rounded-2xl border border-[#e9eaeb] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 h-full min-h-[360px] max-h-[400px] relative overflow-hidden'>
            {/* Globe Background  */}
            <div className='absolute bottom-2 right-2 w-20 md:w-24 lg:w-32 z-0 opacity-80'>
              <img
                src={globeBgImg}
                alt='globe-bg'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='flex flex-col h-full relative z-10 justify-between'>
              <div className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
                <div className='flex flex-col gap-1 md:gap-2'>
                  <h2 className='text-base md:text-lg lg:text-2xl font-bold text-[#0A0D12] leading-tight'>
                    Proven Results, Real Impact
                  </h2>
                  <p className='text-xs md:text-sm lg:text-base text-[#0A0D12] leading-5 md:leading-6 lg:leading-7'>
                    Turn skills into careers with top-tier training & expert
                    guidance
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-2 md:gap-3 lg:gap-4'>
                  <div>
                    <p className='text-base md:text-lg lg:text-2xl font-bold text-[#0A0D12] leading-tight'>
                      90%+
                    </p>
                    <p className='text-xs md:text-sm lg:text-base text-[#0A0D12] leading-4 md:leading-5 lg:leading-7'>
                      Job Placement
                    </p>
                  </div>
                  <div>
                    <p className='text-base md:text-lg lg:text-2xl font-bold text-[#0A0D12] leading-tight'>
                      50,000+
                    </p>
                    <p className='text-xs md:text-sm lg:text-base text-[#0A0D12] leading-4 md:leading-5 lg:leading-7'>
                      Graduates
                    </p>
                  </div>
                  <div>
                    <p className='text-base md:text-lg lg:text-2xl font-bold text-[#0A0D12] leading-tight'>
                      1,000+
                    </p>
                    <p className='text-xs md:text-sm lg:text-base text-[#0A0D12] leading-4 md:leading-5 lg:leading-7'>
                      Hiring Partners
                    </p>
                  </div>
                  <div>
                    <p className='text-base md:text-lg lg:text-2xl font-bold text-[#0A0D12] leading-tight'>
                      Hired
                    </p>
                    <p className='text-xs md:text-sm lg:text-base text-[#0A0D12] leading-4 md:leading-5 lg:leading-7'>
                      by top tech companies
                    </p>
                  </div>
                </div>
              </div>

              {/* icon Proven */}
              <div className='flex justify-between items-end relative z-20'>
                <div className=' lg:w-[98px] lg:h-[32px] flex-shrink-0'>
                  <img
                    src={provenImg}
                    alt='icon-proven'
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row sections */}
          <div className='md:col-span-6 lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8'>
            {/* Choose Your Path Section */}
            <div className='bg-white rounded-2xl border border-[#e9eaeb] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 min-h-[319px] max-h-[400px]'>
              <div className='flex flex-col gap-4 h-full'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg md:text-2xl font-bold text-[#0A0D12] leading-tight'>
                    Choose Your Path, Build Your Future
                  </h2>
                  <p className='text-sm md:text-base text-[#0A0D12] leading-7'>
                    Master frontend development with cutting-edge skills and
                    best practices.
                  </p>
                </div>

                {/* Tech grid icons */}
                <div className='grid grid-cols-3 gap-2 mt-[20px]'>
                  <div className='flex items-center justify-center'>
                    <img
                      src={jsImg}
                      alt='js-image'
                      className='rounded-lg'
                      style={{ height: '79px', width: '111px' }}
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img
                      src={reactImg}
                      alt='react-image'
                      className='rounded-lg'
                      style={{ height: '79px', width: '111px' }}
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img
                      src={cssImg}
                      alt='css-image'
                      className='rounded-lg'
                      style={{ height: '79px', width: '111px' }}
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img
                      src={htmlImg}
                      alt='html-image'
                      className='rounded-lg'
                      style={{ height: '79px', width: '111px' }}
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img
                      src={tailwindImg}
                      alt='tailwind-image'
                      className='rounded-lg'
                      style={{ height: '79px', width: '111px' }}
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img
                      src={figmaImg}
                      alt='figma-image'
                      className='rounded-lg'
                      style={{ height: '79px', width: '111px' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Everything You Need Section */}
            <div className='bg-white rounded-2xl border border-[#e9eaeb] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 min-h-[390px] max-h-[400px]'>
              <div className='flex flex-col gap-6 h-full'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg md:text-2xl font-bold text-[#0A0D12] leading-tight'>
                    Everything You Need to Succeed
                  </h2>
                  <p className='text-sm md:text-base text-[#0A0D12] leading-7'>
                    Live classes, mentorship, hands-on projects, and career
                    support
                  </p>
                </div>

                <div className='relative mt-auto'>
                  <div className='w-full aspect-video bg-gray-200 rounded-lg overflow-hidden'>
                    <img
                      src={videoImg}
                      alt='video-image'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-12 h-12 md:w-16 md:h-16 backdrop-blur rounded-full flex items-center justify-center bg-white/30'>
                      <img
                        src={playIcon}
                        alt='Play-icon'
                        className='w-6 h-6 md:w-8 md:h-8'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className='bg-[#0093DD] rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 min-h-[319px] max-h-[400px]'>
              <div className='flex flex-col h-full justify-between'>
                <div>
                  <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6'>
                    <img src={blueIcon} alt='blue-icon' className='w-8 h-8' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-bold text-white leading-tight'>
                      Your Future Starts Here
                    </h2>
                    <p className='text-sm md:text-base text-white leading-7'>
                      Enroll today and become a Frontend Developer in just
                      months!
                    </p>
                  </div>
                </div>

                <button className='w-full py-3 bg-white rounded-full text-sm md:text-base font-semibold text-[#0A0D12] hover:bg-gray-100 transition-colors mt-6'>
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingJourneySection;
