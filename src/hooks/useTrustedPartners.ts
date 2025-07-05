// src/hooks/useTrustedPartners.ts
import { useMemo } from 'react';
import MailchimpLogo from '../assets/logo/mailchimp-logo.png';
import SlackLogo from '../assets/logo/slack-logo.png';
import PayPalLogo from '../assets/logo/paypal-logo.png';
import ShopifyLogo from '../assets/logo/shopify-logo.png';
import NetflixLogo from '../assets/logo/netflix-logo.png';
import UpworkLogo from '../assets/logo/upwork-logo.png';

interface Logo {
  src: string;
  alt: string;
}

interface TrustedPartnersContent {
  title: string;
  description: string;
}

export const useTrustedPartners = () => {
  const mobileLogos = useMemo<Logo[]>(
    () => [
      { src: MailchimpLogo, alt: 'Mailchimp' },
      { src: SlackLogo, alt: 'Slack' },
      { src: PayPalLogo, alt: 'PayPal' },
    ],
    []
  );

  const desktopLogos = useMemo<Logo[]>(
    () => [
      { src: MailchimpLogo, alt: 'Mailchimp' },
      { src: SlackLogo, alt: 'Slack' },
      { src: PayPalLogo, alt: 'PayPal' },
      { src: ShopifyLogo, alt: 'Shopify' },
      { src: NetflixLogo, alt: 'Netflix' },
      { src: UpworkLogo, alt: 'Upwork' },
    ],
    []
  );

  const content = useMemo<TrustedPartnersContent>(
    () => ({
      title: 'Trusted by 1,000+ Hiring Partners Worldwide',
      description: 'From global tech companies to fast-growing startups.',
    }),
    []
  );

  return {
    mobileLogos,
    desktopLogos,
    content,
  };
};
