import React, { cloneElement, useEffect, useRef } from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { useClickOutside } from '../../utils';

const Popup = (props: {
  trigger: React.ReactElement;
  triggerRef?: React.RefObject<HTMLElement>;
  children: React.ReactElement;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  noOverrideWidth?: boolean;
  withPortal?: boolean;
}) => {
  const triggerFallbackRef = useRef<HTMLElement>(null);
  const triggerRef = props.triggerRef || triggerFallbackRef;
  const popupRef = useRef<HTMLDivElement>(null);

  const measureWithNoPortal = () => {
    const triggerRect = triggerRef.current;
    const popupRect = popupRef.current;

    if (!triggerRect || !popupRect) {
      return;
    }

    const triggerRectBounds = triggerRect.getBoundingClientRect();
    const popupRectBounds = popupRect.getBoundingClientRect();

    if (
      triggerRectBounds.bottom + popupRectBounds.height + 8 <=
      window.innerHeight
    ) {
      popupRef.current.style.top = `calc(100% + 8px)`;
      return;
    }

    if (window.innerHeight - triggerRectBounds.bottom > triggerRectBounds.top) {
      popupRef.current.style.top = `calc(100% + 8px)`;
      popupRef.current.style.maxHeight = `${window.innerHeight - triggerRectBounds.bottom - 16}px`;
      return;
    }

    popupRef.current.style.bottom = `calc(100% + 8px)`;
    popupRef.current.style.top = 'auto';

    if (triggerRectBounds.top < popupRectBounds.height + 8) {
      popupRef.current.style.maxHeight = `${triggerRectBounds.top - 16}px`;
      return;
    }

    return;
  };

  const measureWithPortal = () => {
    const triggerRect = triggerRef.current;
    const popupRect = popupRef.current;

    if (!triggerRect || !popupRect) {
      return;
    }

    const triggerRectBounds = triggerRect.getBoundingClientRect();
    const popupRectBounds = popupRect.getBoundingClientRect();
    

    popupRef.current.style.left = `${triggerRectBounds.left}px`;

    // if the bottom is fit to the popup, show the popup at the bottom of the trigger
    if (
      triggerRectBounds.bottom + popupRectBounds.height + 8 <=
      window.innerHeight
    ) {
      popupRef.current.style.top = `${triggerRectBounds.bottom + window.scrollY + 8}px`;
      return;
    }

    // if the bottom of the trigger has more space at the bottom, show the popup at the bottom of the trigger and adjust the max height
    if (window.innerHeight - triggerRectBounds.bottom > triggerRectBounds.top) {
      popupRef.current.style.top = `${triggerRectBounds.bottom + window.scrollY + 8}px`;
      popupRef.current.style.maxHeight = `${window.innerHeight - triggerRectBounds.bottom - 16}px`;
      return;
    }

    const newTop = triggerRectBounds.top - popupRectBounds.height - 8;
    if (newTop >= 0) {
      popupRef.current.style.top = `${newTop + window.scrollY}px`;
      return;
    }

    popupRef.current.style.top = `${window.scrollY + 8}px`;
    popupRef.current.style.maxHeight = `${triggerRectBounds.top - 16}px`;
    return;
  }

  const measurePopup = () => {
    if (!props.isOpen) {
      return;
    }

    const triggerRect = triggerRef.current;
    const popupRect = popupRef.current;

    if (!triggerRect || !popupRect) {
      return;
    }

    const triggerRectBounds = triggerRect.getBoundingClientRect();

    popupRef.current.style.position = 'absolute';
    popupRef.current.style.zIndex = '10';

    if (!props.noOverrideWidth) {
      popupRef.current.style.width = `${triggerRectBounds.width}px`;
    }

    if (!props.withPortal) {
      measureWithNoPortal();
      return;
    }

    measureWithPortal();
    
  
  };

  useEffect(() => {
    if (props.isOpen) {
      measurePopup();
    }
  }, [props.isOpen, props.withPortal]);

  useClickOutside(props.isOpen ?? false, [triggerRef, popupRef], () => {
    props.setIsOpen(false);
  });

  return (
    <div
      className={classNames({
        ['relative']: !props.withPortal,
      })}
    >
      {cloneElement(props.trigger, {
        ref: triggerRef,
        onClick: () => props.setIsOpen(!props.isOpen),
      })}
      {props.isOpen
        ? props.withPortal
          ? createPortal(
              cloneElement(props.children, {
                ref: popupRef,
              }),
              document.getElementById('popup-root') ?? document.body,
            )
          : cloneElement(props.children, {
              ref: popupRef,
            })
        : null}
    </div>
  );
};

export default Popup;
