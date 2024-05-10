const Check = () => (
  <svg width={24} height={24} fill="none">
    <g clipPath="url(#Check)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 13.5 9 18.75l12-12"
      />
    </g>
    <defs>
      <clipPath id="Check">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Check;
