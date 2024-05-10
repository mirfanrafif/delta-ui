const Pencil = () => (
  <svg width={32} height={32} fill="none">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#Pencil)"
    >
      <path d="M11.586 27H6a1 1 0 0 1-1-1v-5.586a1 1 0 0 1 .293-.707L20.707 4.293a1 1 0 0 1 1.413 0l5.587 5.582a1 1 0 0 1 0 1.414L12.293 26.707a1 1 0 0 1-.707.293ZM17 8l7 7M20.5 11.5l-12 12M11.936 26.936l-6.872-6.872" />
    </g>
    <defs>
      <clipPath id="Pencil">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Pencil;
