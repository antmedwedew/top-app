import React from "react";

export const CloseSmallIcon = ({
  width = "12",
  height = "12",
  color = "#1CC37E",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill={color}
      {...props}
    >
      <line
        x1="2.06066"
        y1="1.93934"
        x2="10.5459"
        y2="10.4246"
        stroke={color}
        strokeWidth="3"
      />
      <line
        x1="1.93934"
        y1="10.4246"
        x2="10.4246"
        y2="1.93935"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  );
};
