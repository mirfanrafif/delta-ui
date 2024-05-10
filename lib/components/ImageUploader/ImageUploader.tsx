import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import { FormLabel } from '..';
import { Upload } from '../../assets/icons';
import ImagePreviewItem from './ImagePreviewItem';
import styles from './ImageUploader.module.css';
import ImageUploaderProps from './ImageUploaderProps';

export const ImageUploader = (props: ImageUploaderProps) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [tempPhotos, setTempPhotos] = useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    //reset temp photos when selected files change
    setTempPhotos([]);
  }, [props.selectedFiles]);

  const handleChange = (files: FileList) => {
    //check file type
    const fileArray = Array.from(files);

    props.setSelectedFiles(files);
    setTempPhotos(fileArray);
  };

  return (
    <>
      <div className={styles.imageUploadContainer}>
        {/* drag n drop area here */}
        <div
          className={classNames(styles.imageUploadButton, {
            [styles.dragging]: dragging,
          })}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            if (event.dataTransfer.files) {
              handleChange(event.dataTransfer.files);
            }
          }}
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.click();
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            setDragging(false);
          }}
        >
          <input
            type="file"
            className={styles.imageUploadInput}
            onChange={(e) => {
              if (e.target.files) {
                handleChange(e.target.files);
                e.target.value = '';
              }
            }}
            accept="image/*"
            ref={inputRef}
            multiple
          />

          <div className={styles.imageUploadLabel}>
            <Upload />
            <p className={styles.title}>{props.dragDropTitle}</p>
            <p>{props.dragDropDescription}</p>
            {props.localError && (
              <FormLabel label={props.localError} isError={true} />
            )}
          </div>
        </div>
        <div className={styles.imagePreviewList}>
          <div className={styles.imagePreviewFlex}>
            {(
              props.selectedFiles.map((item) => {
                if (item instanceof File) {
                  return URL.createObjectURL(item);
                }
                return item.url;
              }) || Array<string>()
            ).map((url, index) => (
              <ImagePreviewItem
                url={url}
                id={index}
                key={index}
                isThumbnail={props.thumbnailUrl === url}
                onSetAsThumbnail={props.onSetAsThumbnail}
                onDelete={props.onDelete}
                thumbnailLabel={props.thumbnailLabel}
              />
            ))}
            {tempPhotos.map((file, index) => (
              <ImagePreviewItem
                url={URL.createObjectURL(file)}
                id={index}
                key={index}
                isThumbnail={props.thumbnailUrl === URL.createObjectURL(file)}
                onSetAsThumbnail={props.onSetAsThumbnail}
                onDelete={props.onDelete}
                isLoading={true}
                thumbnailLabel={props.thumbnailLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
