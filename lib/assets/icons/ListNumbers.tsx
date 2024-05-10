const ListNumbers = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#ListNumbers)"
    >
      <path d="M13 16h14M13 8h14M13 24h14M7 13V5L5 6M9 26H5l3.585-4.796a1.962 1.962 0 0 0-.405-2.802 2.098 2.098 0 0 0-2.882.394 1.98 1.98 0 0 0-.298.538" />
    </g>
    <defs>
      <clipPath id="ListNumbers">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ListNumbers;
