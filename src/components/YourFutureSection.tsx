import React from 'react';
import bgYourFuture from '../assets/images/bg-yourfuture.png';

const YourFutureSection: React.FC = () => {
  return (
    <section className='max-w-[1440px] mx-auto'>
      <div
        className='relative flex flex-col items-center p-[40px_20px] md:p-[60px_40px] gap-[30px] w-full h-[270px] md:h-[360px] isolate bg-black'
        style={{
          backgroundImage: `url(${bgYourFuture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content container */}
        <div className='flex flex-col items-center gap-[16px] w-full max-w-[353px] md:max-w-[800px] z-[1]'>
          <h1 className='w-full text-[24px] md:text-[42px] font-extrabold leading-[36px] md:leading-[52px] text-center text-white'>
            Your Future Starts Here!
          </h1>

          <p className='w-full text-[18px] md:text-[20px] font-normal leading-[32px] md:leading-[36px] text-center text-[#D5D7DA]'>
            Enroll today and become a Frontend Developers in just months
          </p>
        </div>

        {/* CTA Button */}
        <button className='flex flex-row justify-center items-center p-[8px] md:p-[10px] gap-[4px] w-full max-w-[353px] md:max-w-[240px] h-[44px] md:h-[52px] bg-[#0093DD] rounded-full z-[2] hover:bg-[#007bbd] transition-colors'>
          <span className='text-[14px] md:text-[16px] font-semibold leading-[28px] text-white'>
            Join Now
          </span>
        </button>
      </div>
    </section>
  );
};

export default YourFutureSection;
