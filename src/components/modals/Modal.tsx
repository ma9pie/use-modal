import styled from '@emotion/styled';
import React, { useEffect } from 'react';

import GlobalStyles from '@/components/styles/GlobalStyles';
import useFixedScreen from '@/hooks/useFixedScreen';
import useModal from '@/hooks/useModal';
import { ModalProps } from '@/types';

const Modal = ({
  id,
  isOpen,
  top = '50%',
  left = '50%',
  padding = '16px',
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
    <GlobalStyles className={isOpen ? 'fade-in' : 'fade-out'}>
      <Overlay onClick={() => closeModal(id)}></Overlay>
      <Container
        style={{
          top,
          left,
          padding,
        }}
      >
        {component()}
      </Container>
    </GlobalStyles>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Container = styled.div<{ top?: string; left?: string; padding?: string }>`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  padding: ${(props) => props.padding};
  width: 80%;
  min-width: 240px;
  max-width: 400px;
  gap: 16px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
