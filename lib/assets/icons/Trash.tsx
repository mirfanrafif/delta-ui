const Trash = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#Trash)"
    >
      <path d="M27 7H5M13 13v8M19 13v8M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7M21 7V5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2" />
    </g>
    <defs>
      <clipPath id="Trash">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Trash;
