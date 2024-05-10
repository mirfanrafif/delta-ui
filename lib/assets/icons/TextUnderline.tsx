const TextUnderline = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#TextUnderline)"
    >
      <path d="M8 28h16M23 7v10a7 7 0 1 1-14 0V7" />
    </g>
    <defs>
      <clipPath id="TextUnderline">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TextUnderline;
