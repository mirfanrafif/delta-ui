const BadgeSuccessDefault = () => (
  <svg width={16} height={16} fill="none">
    <rect width={16} height={16} fill="#F9F9F9" rx={8} />
    <g clipPath="url(#BadgeSuccessDefault)">
      <path
        stroke="#B5B7BD"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 8.5 7 10.25l4-4"
      />
    </g>
    <defs>
      <clipPath id="BadgeSuccessDefault">
        <path fill="#fff" d="M4 4h8v8H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default BadgeSuccessDefault;
