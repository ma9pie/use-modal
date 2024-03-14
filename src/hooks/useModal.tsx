import { useCallback, useContext } from 'react';

import { ModalContext } from '@/components/provider/ModalProvider';
import { ModalProps, Modals, ModalType } from '@/types';
import { createUid, delay } from '@/utils';

const useModal = () => {
  const { deleteDelay, modals, setModals } = useContext(ModalContext);

  // Check the most recently opened modal id
  const getRecentModalId = useCallback(() => {
    const arr = Array.from(modals.values()).sort(
      (a: ModalProps, b: ModalProps) => {
        const createdAtA = a.createdAt || 0;
        const createdAtB = b.createdAt || 0;
        return createdAtB - createdAtA;
      }
    );
    if (arr.length === 0) return null;
    return arr[0].id;
  }, [modals]);

  const openModal = useCallback(
    (props: ModalProps) => {
      setModals((prevMap: Modals) => {
        const newMap = new Map(prevMap);
        if (props.id && newMap.has(props.id)) {
          return prevMap;
        }
        const id = props.id || createUid();
        props.id = id;
        props.type = props.type || ModalType.Modal;
        props.isOpen = true;
        props.createdAt = new Date().getTime();
        newMap.set(id, props);
        return newMap;
      });
    },
    [setModals]
  );

  const closeModal = useCallback(
    async (id?: string) => {
      const _id = id || getRecentModalId();
      if (!_id) return;
      setModals((prevMap: Modals) => {
        const newMap = new Map(prevMap);
        const props = newMap.get(_id);
        if (!props) {
          return prevMap;
        }
        props.isOpen = false;
        newMap.set(_id, props);
        return newMap;
      });
      await delay(deleteDelay);
      setModals((prevMap: Modals) => {
        const newMap = new Map(prevMap);
        newMap.delete(_id);
        return newMap;
      });
      return;
    },
    [deleteDelay, setModals, getRecentModalId]
  );

  const changeModal = useCallback(
    async (props: ModalProps) => {
      await closeModal();
      openModal(props);
    },
    [openModal, closeModal]
  );

  const openBottomSheet = (props: ModalProps) => {
    openModal({ ...props, type: ModalType.BottomSheet });
  };

  return {
    openModal,
    closeModal,
    changeModal,
    openBottomSheet,
  };
};

export default useModal;
