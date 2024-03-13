import styled from '@emotion/styled';
import React, { useEffect } from 'react';

import Text from '@/components/common/Text';
import Overlay from '@/components/modals/Overlay';
import useFixedScreen from '@/hooks/useFixedScreen';
import useModal from '@/hooks/useModal';
import { ModalProps } from '@/types';
import { cn } from '@/utils';

const BottomSheet = ({
  id,
  isOpen,
  title,
  height = 'auto',
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

  useFixedScreen('bottom-sheet');

  useEffect(() => {
    onAfterOpen();
    return () => {
      onAfterClose();
    };
  }, []);

  return (
    <Wrapper>
      <Overlay
        className={cn(overlayClassName, isOpen ? 'fade-in' : 'fade-out')}
        backgroundColor={overlayBg}
        onClick={() => closeModal(id)}
      ></Overlay>
      <Container
        className={cn(contentClassName, isOpen ? 'slide-up' : 'slide-down')}
        style={{
          height: height,
          padding: padding,
          borderTopLeftRadius: padding,
          borderTopRightRadius: padding,
          backgroundColor: contentBg,
        }}
      >
        {title && (
          <Top>
            <Text s18 bold>
              {title}
            </Text>
          </Top>
        )}
        <Content>{component()}</Content>
      </Container>
    </Wrapper>
  );
};

export default BottomSheet;

const Wrapper = styled.div``;
const Container = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  flex: 1;
  min-width: 240px;
  max-height: 100vh;
  z-index: 1000;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const Content = styled.div`
  max-height: 100vh;
`;
