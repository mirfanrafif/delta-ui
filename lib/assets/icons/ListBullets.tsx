const ListBullets = () => (
  <svg width={32} height={32} fill="none">
    <g clipPath="url(#ListBullets)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 8h16M11 16h16M11 24h16"
      />
      <path
        fill="#000"
        d="M5.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.5 25.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
    <defs>
      <clipPath id="ListBullets">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ListBullets;
