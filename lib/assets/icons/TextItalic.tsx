const TextItalic = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#TextItalic)"
    >
      <path d="m19 7-6 18M8 25h10M14 7h10" />
    </g>
    <defs>
      <clipPath id="TextItalic">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TextItalic;
