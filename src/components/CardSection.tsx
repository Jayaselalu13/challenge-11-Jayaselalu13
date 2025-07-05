import React from 'react';
// Import all images at the top of the file
import htmlImage from '../assets/images/html-image.png';
import cssImage from '../assets/images/css-image.png';
import jsImage from '../assets/images/js-image.png';
import tailwindImage from '../assets/images/tailwind-image.png';
import reactImage from '../assets/images/react-image.png';
import figmaImage from '../assets/images/figma-image.png';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className='flex flex-col w-full bg-white border-card border-[#E9EAEB] rounded-2xl shadow-[0_4px_16px_rgba(176,176,176,0.25)] overflow-hidden'>
      <div className='w-full h-[297px] flex items-center justify-center'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-semibold text-[#0A0D12]'>{title}</h3>
          <p className='text-sm font-normal text-[#414651] leading-6'>
            {description}
          </p>
        </div>
        <button className='w-full py-3 px-6 bg-[#0093DD] rounded-full hover:bg-[#0078b4] transition-colors'>
          <span className='text-sm font-semibold text-white'>Learn More</span>
        </button>
      </div>
    </div>
  );
};

const CardSection: React.FC = () => {
  const cardsData = [
    {
      title: 'HTML',
      description:
        'The backbone of web pages, structuring content for browsers',
      imageSrc: htmlImage,
      imageAlt: 'HTML',
    },
    {
      title: 'CSS',
      description:
        'Styles and enhances the visual presentation of web elements',
      imageSrc: cssImage,
      imageAlt: 'CSS',
    },
    {
      title: 'JavaScript',
      description: 'Adds interactivity and dynamic functionality to websites',
      imageSrc: jsImage,
      imageAlt: 'JavaScript',
    },
    {
      title: 'Tailwind CSS',
      description:
        'A utility-first CSS framework for fast and responsive UI design',
      imageSrc: tailwindImage,
      imageAlt: 'Tailwind CSS',
    },
    {
      title: 'React JS',
      description:
        'A JavaScript library for building dynamic and scalable user interfaces',
      imageSrc: reactImage,
      imageAlt: 'React JS',
    },
    {
      title: 'Figma',
      description:
        'A collaborative design tool for creating UI/UX prototypes and wireframes',
      imageSrc: figmaImage,
      imageAlt: 'Figma',
    },
  ];

  return (
    <section className='w-full flex justify-center max-w-[1440px] mx-auto'>
      <div className='flex flex-col items-center px-5 py-10 gap-8 w-full max-w-[393px] md:max-w-4xl lg:max-w-[1440px] min-h-screen bg-gradient-to-b from-transparent via-transparent to-[rgba(0,147,221,0.2)] pt-20'>
        {/* Section Header */}
        <div className='flex flex-col items-center gap-3 w-full md:max-w-2xl'>
          <h1 className='text-2xl md:text-4xl font-extrabold text-center text-[#0A0D12]'>
            Learning Frontend Developer Tools
          </h1>
          <p className='text-sm md:text-base font-normal text-center text-[#252B37] leading-6'>
            Mastering Essential Tools for Efficient Frontend Development
          </p>
        </div>

        {/* Cards Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
