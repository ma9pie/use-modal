import React, { createContext, ReactNode, useMemo, useState } from 'react';

import BottomSheet from '@/components/modals/BottomSheet';
import Modal from '@/components/modals/Modal';
import { ModalProps, Modals } from '@/types';

type Props = {
  deleteDelay?: number;
  children: ReactNode;
};

export const ModalContext = createContext({
  deleteDelay: 0,
  modals: new Map(),
  setModals: (state: Modals) => {},
});

const ModalProvider = ({ deleteDelay = 200, children }: Props) => {
  const [modals, setModals] = useState<Modals>(new Map());

  const modalList: ModalProps[] = useMemo(
    () => Array.from(modals.values()),
    [modals]
  );

  return (
    <ModalContext.Provider value={{ deleteDelay, modals, setModals }}>
      <div id="modal-provider">
        {modalList.map((props) => (
          <div key={props.id}>
            {(() => {
              switch (props.type) {
                case 'bottomSheet':
                  return <BottomSheet {...props}></BottomSheet>;
                default:
                  return <Modal {...props}></Modal>;
              }
            })()}
          </div>
        ))}
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
