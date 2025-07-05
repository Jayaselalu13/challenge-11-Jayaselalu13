import { useEffect } from 'react';

export const useFloatingTechIcons = () => {
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const techIcons = document.querySelectorAll<HTMLElement>('.tech-icon');

      techIcons.forEach((icon) => {
        const animateIcon = () => {
          const xMovement = Math.random() * 20 - 10; // -10px to +10px
          const yMovement = Math.random() * 20 - 10; // -10px to +10px

          icon.style.transform = `translate(${xMovement}px, ${yMovement}px)`;

          setTimeout(() => {
            icon.style.transform = 'translate(0, 0)';
          }, 2000);
        };

        const intervalId = setInterval(animateIcon, 4000);
        return () => clearInterval(intervalId);
      });
    }
  }, []);
};
