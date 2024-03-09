import styled from '@emotion/styled';
import React, { useEffect } from 'react';

import Text from '@/components/common/Text';
import GlobalStyles from '@/components/styles/GlobalStyles';
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
    <GlobalStyles>
      <Overlay
        onClick={() => closeModal(id)}
        className={isOpen ? 'fade-in' : 'fade-out'}
      ></Overlay>
      <Container
        className={isOpen ? 'slide-up' : 'slide-down'}
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
    </GlobalStyles>
  );
};

export default BottomSheet;

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
