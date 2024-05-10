const UserCirclePlus = () => (
  <svg width={20} height={20} fill="none">
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#UserCirclePlus)"
    >
      <path d="M10 12.5a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z" />
      <path d="M4.984 15.576a5.625 5.625 0 0 1 10.032 0M14.3 5.7l2.651-2.65M14.3 3.05 16.95 5.7" />
      <path d="M17.396 8.75a7.494 7.494 0 1 1-6.146-6.146" />
    </g>
    <defs>
      <clipPath id="UserCirclePlus">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default UserCirclePlus;
