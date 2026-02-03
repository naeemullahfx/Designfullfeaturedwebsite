import React from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'stone' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ children, className, id, bg = 'white' }) => {
  return (
    <section 
      id={id}
      className={clsx(
        "py-16 lg:py-[60px]",
        bg === 'stone' && "bg-stone-50",
        bg === 'dark' && "bg-stone-900 text-white",
        bg === 'white' && "bg-white",
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[54px]">
        {children}
      </div>
    </section>
  );
};
