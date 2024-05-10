import { MouseEventHandler } from 'react';

export type PhotoType = {
  url: string;
  id: number;
};

export type ImageUploaderProps = {
  handleSubmit?: MouseEventHandler<HTMLDivElement>;
  selectedFiles: PhotoType[];
  setSelectedFiles: (fileList: FileList) => void;
  onSetAsThumbnail?: (url: string) => void;
  onDelete?: (url: string) => void;
  error?: string;
  thumbnailUrl?: string;
  fileLimit?: number;
  dragDropTitle?: string;
  dragDropDescription?: string;
  thumbnailLabel?: string;
  localError?: string;
};

export default ImageUploaderProps;
