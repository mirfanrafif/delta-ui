const TextAlignCenter = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#TextAlignCenter)"
    >
      <path d="M5 8h22M8 13h16M5 18h22M8 23h16" />
    </g>
    <defs>
      <clipPath id="TextAlignCenter">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TextAlignCenter;
