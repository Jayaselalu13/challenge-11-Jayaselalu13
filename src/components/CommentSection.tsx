import starIcon from '../assets/logo/star-icon.png';
import maleAvatar from '../assets/logo/Male-avatar.png';
import femaleAvatar from '../assets/logo/Female-avatar.png';
import previousArrow from '../assets/logo/Previous-Arrow.png';
import nextArrow from '../assets/logo/Next-Arrow.png';

const TestimonialsSection: React.FC = () => {
  return (
    <section className='w-full bg-[#FAFAFA] py-16 px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto'>
      {/* Section Header */}
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A0D12] mb-4'>
          What Our Students Say
        </h2>
        <p className='text-sm md:text-base font-normal text-[#252B37] max-w-2xl mx-auto'>
          Real stories from real learners who turned their goals into careers
        </p>
      </div>

      {/* Testimonial Cards Container */}
      <div className='max-w-7xl mx-auto'>
        {/* Testimonials Grid - Changes from column on mobile to row on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {/* Testimonial Card 1 */}
          <div className='bg-white p-6 rounded-2xl border-choose-your-path flex-col justify-between h-full hidden lg:block'>
            {/* Review Text */}
            <p className='text-base font-normal leading-[30px] text-[#0A0D12] mb-6'>
              "This bootcamp completely changed my life. The mentorship,
              hands-on projects, and job support helped me land a frontend
              developer role in just 4 months!"
            </p>

            {/* Stars and User Info */}
            <div className='mt-auto'>
              {/* Stars */}
              <div className='flex items-center gap-1 mb-4'>
                <div className='flex items-center gap-1 w-40 h-8'>
                  <img src={starIcon} alt='star-icon' />
                </div>
              </div>

              {/* User Info */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center'>
                  <span className='text-lg font-bold text-[#535862]'>R</span>
                </div>
                <div>
                  <h3 className='text-base font-semibold text-[#0A0D12]'>
                    Rizky Aulia
                  </h3>
                  <p className='text-sm text-[#535862]'>Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className='bg-white p-6 rounded-2xl border-choose-your-path flex flex-col justify-between h-full'>
            {/* Review Text */}
            <p className='text-base font-normal leading-[30px] text-[#0A0D12] mb-6'>
              "I had zero tech background before joining, but the structured
              learning path made it easy to follow. Now I'm interning at a tech
              startup and loving it!"
            </p>

            {/* Stars and User Info */}
            <div className='mt-auto'>
              {/* Stars */}
              <div className='flex items-center gap-1 mb-4'>
                <div className='flex items-center gap-1 w-40 h-8'>
                  <img src={starIcon} alt='star-icon' />
                </div>
              </div>

              {/* User Info */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                  <img
                    src={maleAvatar}
                    alt='Jonathan Santoso'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <h3 className='text-base font-semibold text-[#0A0D12]'>
                    Jonathan Santoso
                  </h3>
                  <p className='text-sm text-[#535862]'>Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className='bg-white p-6 rounded-2xl border-choose-your-path flex-col justify-between h-full hidden md:block'>
            {/* Review Text */}
            <p className='text-base font-normal leading-[30px] text-[#0A0D12] mb-6'>
              "The best part was the real-time mentor feedback. I felt like I
              had a personal coach guiding me every step of the way."
            </p>

            {/* Stars and User Info */}
            <div className='mt-auto pt-6'>
              {/* Stars */}
              <div className='flex items-center gap-1 mb-4'>
                <div className='flex items-center gap-1 w-40 h-8'>
                  <img src={starIcon} alt='star-icon' />
                </div>
              </div>

              {/* User Info */}
              <div className='flex items-center relative inset-x-0 bottom-0'>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                  <img
                    src={femaleAvatar}
                    alt='Dina Ramadhani'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <h3 className='text-base font-semibold text-[#0A0D12]'>
                    Dina Ramadhani
                  </h3>
                  <p className='text-sm text-[#535862]'>Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className='flex justify-center md:justify-center max-w-7xl mx-auto mt-8 md:mt-12'>
        <div className='flex items-center gap-2'>
          {/* Previous Arrow */}
          <button className='w-9 h-9 flex items-center justify-center'>
            <img
              src={previousArrow}
              alt='Previous-Arrow'
              className='w-[36px] h-[36px]'
            />
          </button>

          {/* Next Arrow */}
          <button className='w-9 h-9 flex items-center justify-center'>
            <img
              src={nextArrow}
              alt='Next-Arrow'
              className='w-[36px] h-[36px]'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
