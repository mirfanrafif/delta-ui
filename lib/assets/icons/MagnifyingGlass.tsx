const MagnifyingGlass = () => (
  <svg width={16} height={16} fill="none">
    <g
      stroke="#333A47"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#magnify)"
    >
      <path d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10ZM10.536 10.535 14 14" />
    </g>
    <defs>
      <clipPath id="magnify">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MagnifyingGlass;
