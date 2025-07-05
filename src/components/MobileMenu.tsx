import React from 'react';
import logoSymbol from '../assets/logo/logo-symbol.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='lg:hidden fixed inset-0 bg-black bg-opacity-90 z-50 transition-transform duration-300 ease-in-out'>
      <div className='flex flex-col h-full pt-6 px-8'>
        {/* Logo header at the top of the slide-out menu */}
        <div className='flex items-center justify-between py-4 px-4 mb-8 rounded-full border border-neutral-50 border-opacity-40'>
          <div className='flex items-center gap-2'>
            <img src={logoSymbol} alt='Your Logo' width='24' height='24' />
            <span className='text-white'>Your Logo</span>
          </div>
          <button onClick={onClose} className='text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <a
          href='#'
          className='text-white text-xl py-4 border-b border-gray-700'
          onClick={onClose}
        >
          Why Choose Us
        </a>
        <a
          href='#'
          className='text-white text-xl py-4 border-b border-gray-700'
          onClick={onClose}
        >
          Module
        </a>
        <a
          href='#'
          className='text-white text-xl py-4 border-b border-gray-700'
          onClick={onClose}
        >
          Testimony
        </a>
        <a
          href='#'
          className='text-white text-xl py-4 border-b border-gray-700'
          onClick={onClose}
        >
          FAQ
        </a>

        {/* Join Now button */}
        <button
          className='mt-8 bg-[#0093DD] text-white font-medium py-3 rounded-full w-full'
          onClick={onClose}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
