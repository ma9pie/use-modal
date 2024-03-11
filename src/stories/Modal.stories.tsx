import type { Meta } from '@storybook/react';
import React from 'react';

import useModal from '@/hooks/useModal';

const meta = {
  title: 'Components/Modal',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const App = () => {
  const { openModal } = useModal();

  return (
    <div>
      <button onClick={() => openModal({ component: () => <div>123</div> })}>
        Open Modal
      </button>
    </div>
  );
};

export const Modal_ = {
  render: () => <App></App>,
};
