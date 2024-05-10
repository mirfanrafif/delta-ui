const TemplatePlain = () => (
  <svg width={215} height={160} fill="none">
    <g clipPath="url(#a)">
      <rect width={214.5} height={160} fill="#F2F4F8" rx={12} />
      <g filter="url(#b)">
        <path fill="#fff" d="M20 32h174v128H20z" />
      </g>
      <g clipPath="url(#c)">
        <path
          fill="#052A6E"
          d="M116 104c2.209 0 4-1.567 4-3.5s-1.791-3.5-4-3.5-4 1.567-4 3.5 1.791 3.5 4 3.5ZM106.648 99H95.353L101 87l5.648 12Z"
          opacity={0.2}
        />
        <path
          stroke="#052A6E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m109 104-8-17-8 17M116 104c2.209 0 4-1.567 4-3.5s-1.791-3.5-4-3.5-4 1.567-4 3.5 1.791 3.5 4 3.5Z"
        />
        <path
          stroke="#052A6E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M120 104v-7.5c0-1.933-1.791-3.5-4-3.5-1.195 0-2.267.272-3 1M106.648 99H95.353"
        />
      </g>
      <path fill="#052A6E" d="M20 20h174v12H20z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={214.5} height={160} fill="#fff" rx={12} />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M91 80h32v32H91z" />
      </clipPath>
      <filter
        id="b"
        width={254}
        height={208}
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
          result="effect1_dropShadow_305_18419"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_305_18419"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default TemplatePlain;
