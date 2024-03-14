import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React, { useState } from 'react';

import useModal from '@/hooks/useModal';

const meta = {
  title: 'Components/Modal',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const App = () => {
  const { openModal, closeModal, changeModal } = useModal();

  const [count, setCount] = useState(0);

  const openTest1Modal = () => {
    openModal({
      id: 'test1',
      component: () => (
        <div>
          <Button onClick={openTest2Modal}>openTest2Modal</Button>
          <Button onClick={changeToTest2Modal}>changeToTest2Modal</Button>
        </div>
      ),
    });
  };

  const openTest2Modal = () => {
    openModal({
      id: 'test2',
      component: () => <div>test2</div>,
      onAfterClose: async () => {
        closeModal('test1');
      },
    });
  };
  const changeToTest2Modal = () => {
    changeModal({
      id: 'test2',
      component: () => <div>test2</div>,
    });
  };

  const open2Modal = () => {
    openModal({
      id: 'test1',
      component: () => (
        <div>
          <p>test1</p>
          <p>test1</p>
          <p>test1</p>
          <p>test1</p>
        </div>
      ),
    });
    openModal({
      id: 'test2',
      component: () => (
        <div>
          <Button onClick={close2Modal}>close2Modal</Button>
        </div>
      ),
    });
  };

  const close2Modal = () => {
    closeModal('test1');
    closeModal('test2');
  };

  const batchTest = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <Container>
      {/* <Button onClick={batchTest}>{`count : ${count}`}</Button> */}
      <Button onClick={openTest1Modal}>openTest1Modal</Button>
      <Button onClick={open2Modal}>open2Modal</Button>
    </Container>
  );
};

export const Modal_ = {
  render: () => <App></App>,
};

const Container = styled.div`
  display: flex;
  flex: wrap;
  gap: 16px;
`;
const Button = styled.button`
  border: 1px solid black;
  padding: 8px;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`;
