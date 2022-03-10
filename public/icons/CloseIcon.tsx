import React from 'react';

export const CloseIcon = ({ width = '19', height = '19', color = '#7653FC', ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill={color}
      {...props}
    >
      <rect y="16.5104" width="23" height="3" rx="1.5" transform="rotate(-45 0 16.5104)" fill={color} />
      <rect x="2.25305" width="23" height="3" rx="1.5" transform="rotate(45 2.25305 0)" fill={color} />
    </svg >
  );
};