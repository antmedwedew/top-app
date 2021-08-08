import React from 'react';

export const CloudIcon = ({ width = '19', height = '13', color = '#787D85', ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 13"
      fill={color}
      {...props}
    >
      <path d="M16.6537 5.76156C16.7086 5.47062 16.7363 5.17386 16.7363 4.875C16.7363 2.18678 14.4891 0 11.7266 0C9.96313 0 8.32857 0.914081 7.43056 2.36661C6.21834 1.9842 4.97459 2.14818 3.94992 2.8353C2.92526 3.52188 2.3137 4.60893 2.26423 5.79753C0.917195 6.42012 0 7.74573 0 9.20833C0 9.46223 0.0631973 9.70981 0.111551 9.94995L0.112107 9.95049C0.471994 11.7178 2.07939 13 3.93359 13H15.0664C17.2147 13 19 11.2988 19 9.20833C19 7.72987 18.0703 6.39896 16.6537 5.76156Z" />
    </svg >
  );
};
