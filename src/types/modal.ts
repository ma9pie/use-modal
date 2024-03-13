import { CSSProperties, ReactNode } from 'react';

export enum ModalType {
  Modal = 'modal',
  BottomSheet = 'bottomSheet',
}
export interface ModalProps {
  id?: string;
  type?: ModalType;
  isOpen?: boolean;
  createdAt?: number;

  title?: ReactNode;

  // classNames
  overlayClassName?: string;
  contentClassName?: string;

  // common style
  overlayBg?: string;
  contentBg?: string;
  padding?: number | string;

  // modal style
  top?: number | string;
  left?: number | string;

  // bottomSheet style
  height?: number | string;

  // content
  component?: () => JSX.Element;

  // function
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}
export type Modals = Map<string, ModalProps>;
