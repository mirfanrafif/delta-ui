const TemplateHTML = () => (
  <svg width={215} height={160} fill="none">
    <g clipPath="url(#a)">
      <rect width={214.5} height={160} x={0.5} fill="#F2F4F8" rx={12} />
      <g filter="url(#b)">
        <path fill="#fff" d="M20 32h174v132H20z" />
      </g>
      <g clipPath="url(#c)">
        <path
          fill="#052A6E"
          d="m115 103 6-5-6-5H99l-6 5 6 5h16Z"
          opacity={0.2}
        />
        <path
          stroke="#052A6E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m99 93-6 5 6 5M115 93l6 5-6 5M111 87l-8 22"
        />
      </g>
      <path fill="#052A6E" d="M20.5 20h174v12h-174z" />
      <path fill="#F9F9F9" d="M20.5 32h12v132h-12z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={214.5} height={160} x={0.5} fill="#fff" rx={12} />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M91 82h32v32H91z" />
      </clipPath>
      <filter
        id="b"
        width={254}
        height={212}
        x={-20}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_305_18434"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_305_18434"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default TemplateHTML;
