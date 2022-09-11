import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const SectionHeading: React.FC<Props> = ({ title, children }) => {
  return (
    <header>
      <div className="flex justify-between px-4 sm:px-0">
        <h2 className="text-3xl font-bold leading-tight text-gray-900">
          {title}
        </h2>
        {children}
      </div>
    </header>
  );
};

export default SectionHeading;
