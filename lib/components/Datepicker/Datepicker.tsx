import classNames from 'classnames';
import * as datefns from 'date-fns';
import { enUS } from 'date-fns/locale';

import { Calendar, FormLabel, TextInput } from '../';
import { Calendar as IconCalendar } from '../../assets/icons';
import { DATE_FORMATS } from '../../constants';
import Popup from '../Popup/Popup';
import styles from './Datepicker.module.css';
import DatePickerProps from './DatePicker.props';
import useDatePicker from './DatePicker.viewModel';

export default function DatePicker(props: DatePickerProps) {
  const { isCalendarOpen, setIsCalendarOpen } = useDatePicker();

  const { value: time, ...rest } = props;

  return (
    <div className={styles.container}>
      <FormLabel label={props.label} required={props.required} />

      <Popup
        isOpen={isCalendarOpen}
        setIsOpen={setIsCalendarOpen}
        noOverrideWidth
        trigger={
          <div className={classNames(styles.inputAnchor, props.className)}>
            <TextInput
              {...rest}
              onClick={() => {
                setIsCalendarOpen(!isCalendarOpen);
              }}
              readonly={true}
              value={
                time !== undefined
                  ? datefns.format(time, DATE_FORMATS.dateDisplay)
                  : ''
              }
            />

            <div className={styles.icon}>
              <IconCalendar />
            </div>
          </div>
        }
      >
        <Calendar
          locale={props.locale ?? enUS}
          className={classNames(
            styles.calendarContainer,
            props.calendarClassName,
            {
              [styles.calendarHidden]: !isCalendarOpen,
            },
          )}
          onUpdate={(date) => {
            setIsCalendarOpen(false);
            if (props.onSelectDate === undefined) {
              return;
            }
            if (date.startDate === null) return;
            props.onSelectDate(date.startDate);
          }}
          minimumDate={props.minimumDate}
          maximumDate={props.maximumDate}
          value={{
            startDate: props.value ?? null,
            endDate: null,
          }}
          dateDisabled={(date) => {
            return props?.dateDisabled?.(date) ?? false;
          }}
        />
      </Popup>
    </div>
  );
}
