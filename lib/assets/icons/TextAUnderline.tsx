const TextAUnderline = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#TextAUnderline)"
    >
      <path d="M24 21 16 4 8 21M21.648 16H10.352M5 27h22" />
    </g>
    <defs>
      <clipPath id="TextAUnderline">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TextAUnderline;
