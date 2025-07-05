import React from 'react';
import { useFAQ, type FAQItem } from '../hooks/useFAQ';

interface FAQSectionProps {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'Do I need any coding experience to join?',
      answer:
        "Nope! Our program is beginner-friendly and designed to guide you from zero to job-ready, even if you've never written a single line of code.",
    },
    {
      id: 2,
      question: 'How long does it take to complete the program?',
      answer:
        'Most students complete the program in 3 to 6 months, depending on their pace and availability. You can learn part-time or full-time.',
    },
    {
      id: 3,
      question: 'What kind of support will I get during the program?',
      answer:
        "You'll get 1-on-1 mentorship, live feedback on your projects, and access to a private community for peer support and Q&A with industry professionals.",
    },
    {
      id: 4,
      question: 'Will I build a portfolio during the course?',
      answer:
        "Absolutely. You'll work on real-world projects that you can showcase in your portfolio — an essential part of landing your first job.",
    },
    {
      id: 5,
      question: 'Do you offer job placement assistance?',
      answer:
        'Yes! We provide career coaching, resume reviews, mock interviews, and job-hunting strategies to help you land your dream role.',
    },
  ];

  const { toggleFAQ, isExpanded } = useFAQ(1); // First item expanded by default

  return (
    <section className={`bg-gray-50 py-16 px-4 ${className}`}>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Frequently Asked Questions
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Everything you need to know before starting your journey to become a
            frontend developer.
          </p>
        </div>

        {/* FAQ Container */}
        <div className='space-y-4'>
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className='bg-white rounded-lg border border-gray-200 overflow-hidden'
            >
              <div
                className='flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors'
                onClick={() => toggleFAQ(faq.id)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(faq.id);
                  }
                }}
              >
                <h2 className='text-lg md:text-xl font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </h2>
                <div className='flex-shrink-0'>
                  {isExpanded(faq.id) ? (
                    <svg
                      className='w-6 h-6 text-gray-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M20 12H4'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='w-6 h-6 text-gray-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 4v16m8-8H4'
                      />
                    </svg>
                  )}
                </div>
              </div>
              {isExpanded(faq.id) && (
                <div className='px-6 pb-6 border-t border-gray-100'>
                  <p className='text-gray-600 leading-relaxed pt-4'>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
