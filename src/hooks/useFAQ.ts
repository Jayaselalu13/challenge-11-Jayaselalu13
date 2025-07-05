import { useState } from 'react';

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const useFAQ = (initialExpandedId?: number) => {
  const [expandedId, setExpandedId] = useState<number | null>(
    initialExpandedId || null
  );

  const toggleFAQ = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const isExpanded = (id: number) => expandedId === id;

  return {
    expandedId,
    toggleFAQ,
    isExpanded,
  };
};
