import '@/styles/app.css';

import { css } from '@emotion/css';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';

import Text from '@/components/common/Text';
import useFixedScreen from '@/hooks/useFixedScreen';
import useModal from '@/hooks/useModal';
import { ModalProps } from '@/types';

const BottomSheet = ({
  id,
  isOpen,
  title,
  height = 'auto',
  onAfterOpen = () => {},
  onAfterClose = () => {},
  component = () => <></>,
}: ModalProps) => {
  const { closeModal } = useModal();

  useFixedScreen('bottom-sheet');

  useEffect(() => {
    onAfterOpen();
    return () => onAfterClose();
  }, [onAfterOpen, onAfterClose]);

  return (
    <Wrapper>
      <Overlay
        onClick={() => closeModal(id)}
        className={isOpen ? fadeIn : fadeOut}
      ></Overlay>
      <Container
        className={isOpen ? slideUp : slideDown}
        style={{
          height,
        }}
      >
        <Top>
          <BlankBox>1</BlankBox>
          <Text s18 bold>
            {title}
          </Text>
        </Top>
        <Content>{component()} </Content>
      </Container>
    </Wrapper>
  );
};

export default BottomSheet;

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
const slideUp = css`
  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  animation: slide-up 0.2s ease-in-out forwards;
`;
const slideDown = css`
  @keyframes slide-down {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  }
  animation: slide-down 0.2s ease-in-out forwards;
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
const Container = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  flex: 1;
  min-width: 240px;
  max-height: 100vh;
  border-radius: 24px 24px 0px 0px;
  padding: 24px;
  background-color: #ffffff;
  z-index: 999;
  & * {
    overscroll-behavior: contain;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const BlankBox = styled.div`
  width: 16px;
`;
const Content = styled.div`
  padding-right: 8px;
  max-height: 100vh;
  overflow-y: scroll;
`;
