import { Locale } from 'date-fns';

import { TextInputProps } from '../Form/TextInput/TextInput';

type DatePickerProps = Omit<TextInputProps, 'value'> & {
  minimumDate?: Date;
  maximumDate?: Date;
  value?: Date;
  onSelectDate?: (date: Date) => void;
  dateDisabled?: (date: Date) => boolean;
  onReset?: () => void;
  isInsidePopup?: boolean;
  popupClassName?: string;
  calendarClassName?: string;
  multiDates?: Date[];
  onClickMultiDate?: (date: Date) => void;
  isRightAligned?: boolean;
  locale?: Locale;
  className?: string;
  label?: string;
  required?: boolean;
};

export default DatePickerProps;
