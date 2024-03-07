export interface ModalProps {
  id?: string;
  isOpen?: boolean;
  createdAt?: number;

  // style
  top?: number | string;
  left?: number | string;
  padding?: number | string;

  component?: () => JSX.Element;
}
export type Modals = Map<string, ModalProps>;
