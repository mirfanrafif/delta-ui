const AddressBook = () => (
  <svg width={20} height={20} fill="none">
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#AddressBook)"
    >
      <path d="M10.625 11.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 5.625h1.875M2.5 10h1.875M2.5 14.375h1.875" />
      <path d="M6.875 13.125a4.687 4.687 0 0 1 7.5 0" />
      <path d="M16.875 16.875V3.125a.625.625 0 0 0-.625-.625H5a.625.625 0 0 0-.625.625v13.75c0 .345.28.625.625.625h11.25c.345 0 .625-.28.625-.625Z" />
    </g>
    <defs>
      <clipPath id="AddressBook">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default AddressBook;
