const TextB = () => (
  <svg width={32} height={32} fill="none">
    <g clipPath="url(#TextB)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 15h10a5 5 0 1 1 0 10H9V6h8.5a4.5 4.5 0 1 1 0 9"
      />
    </g>
    <defs>
      <clipPath id="TextB">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TextB;
