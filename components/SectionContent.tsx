import React from 'react';
import { classNames } from '../lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionContent: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames(className || 'px-4 py-8 sm:px-0')}>
      {children}
    </div>
  );
};

export default SectionContent;
