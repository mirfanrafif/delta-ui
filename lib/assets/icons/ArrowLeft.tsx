export type ArrowLeftProps = {
  color?: string;
};

export const ArrowLeft = ({ color = '#6B707C' }: ArrowLeftProps) => (
  <svg width={24} height={24} fill="none">
    <g
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#arrow-left)"
    >
      <path d="M20.25 12H3.75M10.5 5.25 3.75 12l6.75 6.75" />
    </g>
    <defs>
      <clipPath id="arrow-left">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowLeft;
