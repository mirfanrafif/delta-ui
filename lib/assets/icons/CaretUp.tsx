import { ComponentPropsWithoutRef } from 'react';

const CaretUp = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#CaretUp)">
      <path
        stroke="#333A47"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 16.5 12 9l-7.5 7.5"
      />
    </g>
    <defs>
      <clipPath id="CaretUp">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CaretUp;
