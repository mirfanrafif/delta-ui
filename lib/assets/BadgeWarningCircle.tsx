const BadgeWarningCircle = () => (
  <svg width={12} height={12} fill="none">
    <g clipPath="url(#badgewarningcircle)">
      <path
        fill="#E72F2F"
        d="M6 1.125a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75ZM5.625 3.75a.375.375 0 1 1 .75 0v2.625a.375.375 0 0 1-.75 0V3.75ZM6 8.625A.563.563 0 1 1 6 7.5a.563.563 0 0 1 0 1.125Z"
      />
    </g>
    <defs>
      <clipPath id="badgewarningcircle">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default BadgeWarningCircle;
