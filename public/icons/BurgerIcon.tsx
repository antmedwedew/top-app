import React from "react";

export const BurgerIcon = ({
  width = "20",
  height = "17",
  color = "#7653FC",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 17"
      fill={color}
      {...props}
    >
      <rect width="20" height="3" rx="1.5" />
      <rect y="7" width="20" height="3" rx="1.5" />
      <rect y="14" width="20" height="3" rx="1.5" />
    </svg>
  );
};
