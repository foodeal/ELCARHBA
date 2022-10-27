import React from 'react';

export const RoundedProfile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <g>
      <path fill="currentColor" d="M0,12C0,5.4,5.4,0,12,0l0,0c6.6,0,12,5.4,12,12l0,0c0,6.6-5.4,12-12,12l0,0C5.4,24,0,18.6,0,12L0,12z" />
      <path fill="white" d="M12,14.5c-3.2,0-6,0.5-6,2.7c0,2.2,2.7,2.7,6,2.7c3.2,0,6-0.5,6-2.7S15.3,14.5,12,14.5z" />
      <path fill="white" style={{ opacity: '0.4' }} d="M12,12.5c2.2,0,4-1.9,4-4.2S14.2,4,12,4C9.8,4,8,5.9,8,8.2S9.8,12.5,12,12.5z" />
    </g>
  </svg>
);
