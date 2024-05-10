import { useState } from 'react';

const useDatePicker = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  return {
    isCalendarOpen,
    setIsCalendarOpen,
  };
};

export default useDatePicker;
