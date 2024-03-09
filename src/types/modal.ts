import { ReactNode } from 'react';

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

  // modal style
  top?: number | string;
  left?: number | string;
  padding?: number | string;

  // bottomSheet style
  height?: number | string;

  // function
  onAfterOpen?: () => void;
  onAfterClose?: () => void;

  component?: () => JSX.Element;
}
export type Modals = Map<string, ModalProps>;
