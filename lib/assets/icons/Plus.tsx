const Plus = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#Plus)"
    >
      <path d="M5 16h22M16 5v22" />
    </g>
    <defs>
      <clipPath id="Plus">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Plus;
