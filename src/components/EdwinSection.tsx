import edwinImage from '../assets/images/edwin-image.png';
import reactLogo from '../assets/images/react-logo.png';
import css3Logo from '../assets/images/css3-logo.png';
import oneStar from '../assets/logo/one-star.png';

const EdwinSection = () => {
  return (
    <section className='w-full bg-white max-w-[1440px] mx-auto'>
      <div className='container mx-auto px-4 py-8'>
        {/* Container for Mobile and Desktop View */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          {/* Instructor Card - Appears first on mobile */}
          <div className='w-full lg:w-1/2 flex flex-col items-center order-first lg:order-last'>
            {/* Instructor Card */}
            <div className='w-full rounded-lg relative'>
              <img src={edwinImage} alt='Edwin Anderson' className='w-full' />

              {/* Mobile Title - Positioned absolute over the image */}
              <div className='absolute bottom-0 left-0 w-full p-4 from-[#0A0D12] lg:hidden rounded-full'>
                <h1 className='font-bold text-2xl leading-tight text-white'>
                  Learn React JS & Build Interactive Apps!
                </h1>
              </div>
            </div>

            {/* Technology Icons - Hidden on mobile */}
            <div className='grid-cols-2 gap-4 mt-4 w-full hidden md:grid'>
              <div className='rounded-lg flex items-center justify-center'>
                <img src={reactLogo} alt='React Logo' />
              </div>
              <div className='rounded-lg flex items-center justify-center'>
                <img src={css3Logo} alt='CSS3 Logo' />
              </div>
            </div>
          </div>

          {/* Content Section - Appears bellow instructor card on mobile */}
          <div className='w-full lg:w-1/2 flex flex-col items-start gap-6 order-last lg:order-first'>
            {/* Rating Container */}
            <div className='flex items-center gap-1'>
              <img src={oneStar} alt='one-star' />
              <span className='font-sora font-semibold text-sm md:text-base leading-7 text-[#0A0D12]'>
                4.9 (1,672) Best Module
              </span>
            </div>

            {/* Title - Desktop view */}
            <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-[#0A0D12] hidden lg:block'>
              Learn React JS & Build Interactive Apps!
            </h1>

            {/* Description */}
            <p className='font-sora font-normal text-sm md:text-base leading-7 text-[#252B37] max-w-lg'>
              A powerful JavaScript library used for building fast, dynamic, and
              scalable user interfaces with a component-based architecture,
              making development more efficient and maintainable.
            </p>

            {/* Button */}
            <button className='flex flex-row justify-center items-center px-6 py-3 gap-1 w-full md:w-auto bg-[#0093DD] rounded-full text-white font-sora font-semibold'>
              Get Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdwinSection;
