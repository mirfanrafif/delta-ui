const Eye = () => (
  <svg width={20} height={20} fill="none">
    <g
      stroke="#6B707C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Eye)"
    >
      <path d="M10 4.375C3.75 4.375 1.25 10 1.25 10s2.5 5.625 8.75 5.625S18.75 10 18.75 10 16.25 4.375 10 4.375Z" />
      <path d="M10 13.125a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z" />
    </g>
    <defs>
      <clipPath id="Eye">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Eye;
