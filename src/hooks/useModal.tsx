import { useCallback, useContext } from 'react';

import { ModalContext } from '@/components/provider/ModalProvider';
import { ModalProps, Modals, ModalType } from '@/types';
import { createUid, delay } from '@/utils';

let _modals: Modals;

const useModal = () => {
  const { deleteDelay, modals, setModals } = useContext(ModalContext);
  _modals = modals;

  // Check the most recently opened modal id
  const getRecentModalId = useCallback(() => {
    const hashMap: Map<string, ModalProps> = new Map(_modals);
    const arr = Array.from(hashMap.values()).sort(
      (a: ModalProps, b: ModalProps) => {
        const createdAtA = a.createdAt || 0;
        const createdAtB = b.createdAt || 0;
        return createdAtB - createdAtA;
      }
    );
    if (arr.length === 0) return null;
    return arr[0].id;
  }, []);

  const openModal = useCallback(
    (props: ModalProps) => {
      const newMap = new Map(_modals);
      if (props.id && newMap.has(props.id)) return;
      const id = props.id || createUid();
      props.id = id;
      props.type = props.type || ModalType.Modal;
      props.isOpen = true;
      props.createdAt = new Date().getTime();
      newMap.set(id, props);
      setModals(newMap);
    },
    [setModals]
  );

  const closeModal = useCallback(
    async (id?: string) => {
      const _id = id || getRecentModalId();
      if (!_id) return;
      const newMap = new Map(_modals);
      const props = newMap.get(_id);
      if (!props) return;
      props.isOpen = false;
      newMap.set(_id, props);
      setModals(newMap);
      await delay(deleteDelay);
      newMap.delete(_id);
      return setModals(new Map(newMap));
    },
    [deleteDelay, setModals, getRecentModalId]
  );

  const changeModal = useCallback(
    async (props: ModalProps) => {
      await closeModal();
      await delay(20);
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
