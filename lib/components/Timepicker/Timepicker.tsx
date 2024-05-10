import React, { ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames';
import * as datefns from 'date-fns';

import { TextInput } from '..';
import { CaretUp, Clock } from '../../assets/icons';
import Popup from '../Popup/Popup';
import styles from './Timepicker.module.css';

type Props = ComponentPropsWithoutRef<'input'> & {
  time: Date | undefined;
  onChangeTime: (newValue: Date) => void;
  intervalMinutes?: number;
  defaultTime?: Date;
};

const TimePicker = (props: Props) => {
  const {
    time,
    onChangeTime,
    intervalMinutes,
    defaultTime,
    type,
    onBlur,
    onChange,
    ...rest
  } = props;

  const selectedTime: Date = time ?? defaultTime ?? new Date();
  const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);

  const hourRef = React.useRef<HTMLInputElement>(null);
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const amPmRef = React.useRef<HTMLInputElement>(null);

  //#region event handlers
  const onChangeHour = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newHour = e.target.value.replace(/[^0-9]/g, '');

    if (newHour === '') {
      return;
    }

    if (Number(newHour) > 12) {
      newHour = newHour.slice(-1);
      minuteRef.current?.focus();
    }

    const newTime = datefns.setHours(selectedTime, Number(newHour));
    onChangeTime(newTime);
  };

  const onChangeMinute = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newMinute = e.target.value.replace(/[^0-9]/g, '');

    if (Number(newMinute) > 59) {
      newMinute = newMinute.slice(-1);
      amPmRef.current?.focus();
    }

    const newTime = datefns.setMinutes(selectedTime, Number(newMinute));
    onChangeTime(newTime);
  };

  const onChangeAmPm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.toUpperCase() === 'A') {
      if (datefns.getHours(selectedTime) < 12) {
        return;
      }

      const newTime = datefns.setHours(
        selectedTime,
        datefns.getHours(selectedTime) - 12,
      );

      onChangeTime(newTime);
    } else if (e.target.value.toUpperCase() === 'P') {
      if (datefns.getHours(selectedTime) >= 12) {
        return;
      }
      const newTime = datefns.setHours(
        selectedTime,
        datefns.getHours(selectedTime) + 12,
      );
      onChangeTime(newTime);
    }
  };
  //#endregion

  return (
    <div className={styles.container}>
      <Popup
        isOpen={isPopupOpen}
        trigger={
          <div className={styles.popupAnchor}>
            <TextInput
              {...rest}
              onClick={() => {
                setIsPopupOpen(true);
              }}
              readonly={true}
              value={time !== undefined ? datefns.format(time, 'hh:mm a') : ''}
            />

            <div className={styles.icon}>
              <Clock />
            </div>
          </div>
        }
        setIsOpen={setIsPopupOpen}
        noOverrideWidth
      >
        <div className={styles.popup}>
          <div className={styles.hourMinutesRow}>
            <ButtonCol
              onClickPrev={() =>
                onChangeTime(datefns.subHours(selectedTime, 1))
              }
              onClickNext={() =>
                onChangeTime(datefns.addHours(selectedTime, 1))
              }
              value={datefns.format(selectedTime, 'hh')}
              hourRef={hourRef}
              onChangeInput={onChangeHour}
            />
            <span className="w-8 text-center">:</span>

            <ButtonCol
              onClickPrev={() =>
                onChangeTime(datefns.subMinutes(selectedTime, 1))
              }
              onClickNext={() =>
                onChangeTime(datefns.addMinutes(selectedTime, 1))
              }
              value={datefns.format(selectedTime, 'mm')}
              hourRef={minuteRef}
              onChangeInput={onChangeMinute}
            />

            <ButtonCol
              className={'ml-auto'}
              onClickPrev={() =>
                onChangeTime(datefns.subHours(selectedTime, 12))
              }
              onClickNext={() =>
                onChangeTime(datefns.addHours(selectedTime, 12))
              }
              value={datefns.format(selectedTime, 'a')}
              hourRef={amPmRef}
              onChangeInput={onChangeAmPm}
            />
          </div>
        </div>
      </Popup>
    </div>
  );
};

const ButtonCol = (props: {
  value: string;
  onClickPrev: () => void;
  onClickNext: () => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hourRef: React.RefObject<HTMLInputElement>;
  className?: string;
}) => {
  return (
    <div className={classNames(styles.timeCol, props.className)}>
      <button
        className={styles.button}
        onClick={props.onClickPrev}
        tabIndex={-1}
      >
        <CaretUp className={styles.iconUp} />
      </button>

      <div className={classNames(styles.digit, styles.selected)}>
        <input
          type="text"
          value={props.value}
          onChange={props.onChangeInput}
          ref={props.hourRef}
          className={styles.input}
          onClick={() => {
            props.hourRef.current?.select();
          }}
        />
      </div>

      <button
        className={styles.button}
        onClick={props.onClickNext}
        tabIndex={-1}
      >
        <CaretUp className={styles.iconDown} />
      </button>
    </div>
  );
};
export default TimePicker;
