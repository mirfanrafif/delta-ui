import React from 'react';

import classNames from 'classnames';

import { EllipsisVertical } from '../../assets/icons';
import { useClickOutside } from '../../utils';
import { LoadingCircular } from '../LoadingCircular';
import styles from './ImageUploader.module.css';

type Props = {
  url: string;
  id: number;
  onSetAsThumbnail?: (url: string) => void;
  onDelete?: (url: string) => void;
  isThumbnail?: boolean;
  isLoading?: boolean;
  actions?: Array<{ label: string; onClick: () => void }>;
  thumbnailLabel?: string;
};

export default function ImagePreviewItem(props: Props) {
  const [actionOpened, setActionOpened] = React.useState<boolean>(false);

  const isActionShowed = props.onSetAsThumbnail || props.onDelete;
  const iconRef = React.useRef<HTMLImageElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(actionOpened, [popupRef], () => {
    setActionOpened(false);
  });

  return (
    <div className={styles.imagePreviewContainer} key={props.id}>
      <img
        src={props.url}
        className={styles.imagePreview}
        width={200}
        height={200}
        alt="..."
        ref={iconRef}
      />
      {isActionShowed && (
        <div className={styles.actionAnchor} ref={popupRef}>
          <EllipsisVertical
            className={styles.actionButton}
            onClick={() => {
              setActionOpened(!actionOpened);
            }}
          />

          <div
            className={classNames(
              styles.actionPopup,
              actionOpened ? 'block' : 'hidden',
            )}
          >
            {props.actions?.map((action, index) => (
              <div
                key={index}
                className={styles.actionSetThumbnail}
                onClick={() => {
                  action.onClick();
                  setActionOpened(false);
                }}
              >
                {action.label}
              </div>
            ))}
          </div>
        </div>
      )}
      {props.isThumbnail && (
        <div className={styles.thumbnailLabel}>
          {props.thumbnailLabel || 'Thumbnail'}
        </div>
      )}
      {props.isLoading && (
        <div className={styles.loading}>
          <LoadingCircular variant={'white'} className="w-28 h-28" />
        </div>
      )}
    </div>
  );
}
