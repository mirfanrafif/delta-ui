import { ComponentPropsWithoutRef } from 'react';

const GearSix = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg width={20} height={20} fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 13.125a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.16 16.102h-.312L7.344 17.5A8.173 8.173 0 0 1 4.679 16l-.01-2.813a4.167 4.167 0 0 1-.156-.266l-2.49-1.418a7.746 7.746 0 0 1 0-3.005l2.488-1.414c.05-.09.103-.179.156-.266l.013-2.813A8.17 8.17 0 0 1 7.344 2.5l2.5 1.398h.312l2.5-1.398A8.173 8.173 0 0 1 15.321 4l.01 2.813c.055.087.107.175.156.266l2.488 1.417a7.747 7.747 0 0 1 0 3.005l-2.487 1.414c-.051.09-.104.179-.157.266l-.012 2.813a8.172 8.172 0 0 1-2.663 1.506l-2.496-1.398Z"
    />
  </svg>
);

export default GearSix;
