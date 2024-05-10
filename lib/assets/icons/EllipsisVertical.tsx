import { ComponentPropsWithoutRef } from 'react';

export default function EllipsisVertical(
  props: ComponentPropsWithoutRef<'svg'>,
) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#2C2C2C" fill-opacity="0.5" />
      <path d="M14 6C14 4.90625 13.0938 4 12 4C10.875 4 10 4.90625 10 6C10 7.125 10.875 8 12 8C13.0938 8 14 7.125 14 6ZM14 12C14 10.9062 13.0938 10 12 10C10.875 10 10 10.9062 10 12C10 13.125 10.875 14 12 14C13.0938 14 14 13.125 14 12ZM14 18C14 16.9062 13.0938 16 12 16C10.875 16 10 16.9062 10 18C10 19.125 10.875 20 12 20C13.0938 20 14 19.125 14 18Z" />
    </svg>
  );
}
