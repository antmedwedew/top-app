import React from "react";

export const SortIcon = ({
  width = "20",
  height = "13",
  color = "#7653FC",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 13"
      fill={color}
      {...props}
    >
      <rect width="20" height="3" rx="1.5" fill={color} />
      <rect y="5" width="14" height="3" rx="1.5" fill={color} />
      <rect y="10" width="8" height="3" rx="1.5" fill={color} />
    </svg>
  );
};
