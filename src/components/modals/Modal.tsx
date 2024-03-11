import styled from '@emotion/styled';
import React, { useEffect } from 'react';

import Overlay from '@/components/modals/Overlay';
import useFixedScreen from '@/hooks/useFixedScreen';
import useModal from '@/hooks/useModal';
import { ModalProps } from '@/types';

const Modal = ({
  id,
  isOpen,
  top = '50%',
  left = '50%',
  padding = '16px',
  overlayClassName,
  contentClassName,
  overlayBg = 'var(--overlay)',
  contentBg = 'var(--bg)',
  onAfterOpen = () => {},
  onAfterClose = () => {},
  component = () => <></>,
}: ModalProps) => {
  const { closeModal } = useModal();

  useFixedScreen('modal-provider');

  useEffect(() => {
    onAfterOpen();
    return () => onAfterClose();
  }, [onAfterOpen, onAfterClose]);

  return (
    <Wrapper className={isOpen ? 'fade-in' : 'fade-out'}>
      <Overlay
        className={overlayClassName}
        backgroundColor={overlayBg}
        onClick={() => closeModal(id)}
      ></Overlay>
      <Container
        className={contentClassName}
        style={{
          top: top,
          left: left,
          padding: padding,
          backgroundColor: contentBg,
        }}
      >
        {component()}
      </Container>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div``;
const Container = styled.div`
  position: fixed;
  gap: 16px;
  width: 80%;
  min-width: 240px;
  max-width: 400px;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 1000;
`;
