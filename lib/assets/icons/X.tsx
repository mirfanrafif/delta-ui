const X = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#X)"
    >
      <path d="M25 7 7 25M25 25 7 7" />
    </g>
    <defs>
      <clipPath id="X">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default X;
