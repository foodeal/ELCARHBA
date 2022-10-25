import * as React from 'react';

export const Circle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="9.5" stroke="#EA7B6C" />
  </svg>
);
