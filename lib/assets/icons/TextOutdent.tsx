const TextOutdent = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#TextOutdent)"
    >
      <path d="M14 16h13M14 8h13M5 24h22M9 7l-5 5 5 5" />
    </g>
    <defs>
      <clipPath id="TextOutdent">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TextOutdent;
