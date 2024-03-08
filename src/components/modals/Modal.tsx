import { css } from '@emotion/css';
import styled from '@emotion/styled';
import React from 'react';

import useFixedScreen from '@/hooks/useFixedScreen';
import useModal from '@/hooks/useModal';
import { ModalProps } from '@/types';

const Modal = ({
  id,
  isOpen,
  top = '50%',
  left = '50%',
  padding = '16px',
  component,
}: ModalProps) => {
  const { closeModal } = useModal();

  useFixedScreen('modal-provider');

  return (
    <Wrapper className={isOpen ? fadeIn : fadeOut}>
      <Overlay onClick={() => closeModal(id)}></Overlay>
      <Container
        style={{
          top,
          left,
          padding,
        }}
      >
        {component && component()}
      </Container>
    </Wrapper>
  );
};

export default Modal;

const fadeIn = css`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fade-in 0.2s ease-in-out forwards;
`;
const fadeOut = css`
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: fade-out 0.2s ease-in-out forwards;
`;
const Wrapper = styled.div``;
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
