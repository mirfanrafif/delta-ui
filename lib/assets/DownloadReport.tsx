const DownloadReport = () => (
  <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
    <rect width={40} height={40} x={0.666} y={0.5} fill="#EBFBFF" rx={10} />
    <g clipPath="url(#a)">
      <path
        fill="#39DBFF"
        d="M24.75 25h1.875a.624.624 0 0 0 .625-.625v-8.75L24.125 12.5h-6.25a.624.624 0 0 0-.625.625V15h4.375l3.125 3.125V25Z"
        opacity={0.2}
      />
      <path
        stroke="#39DBFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M24.125 27.5h-8.75a.624.624 0 0 1-.625-.625v-11.25a.624.624 0 0 1 .625-.625h6.25l3.125 3.125v8.75a.624.624 0 0 1-.625.625Z"
      />
      <path
        stroke="#39DBFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 15v-1.875a.624.624 0 0 1 .625-.625h6.25l3.125 3.125v8.75a.624.624 0 0 1-.625.625H24.75M17.875 21.875h3.75M17.875 24.375h3.75"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M11 10h20v20H11z" />
      </clipPath>
    </defs>
  </svg>
);
export default DownloadReport;
