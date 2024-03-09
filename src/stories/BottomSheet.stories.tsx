import type { Meta } from '@storybook/react';
import React, { useEffect } from 'react';

import useModal from '@/hooks/useModal';

const meta = {
  title: 'Components/BottomSheet',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const App = () => {
  const { openBottomSheet } = useModal();

  return (
    <div>
      <button
        onClick={() => openBottomSheet({ component: () => <div>123</div> })}
      >
        Open BottomSheet
      </button>
    </div>
  );
};

export const BottomSheet_ = {
  render: () => <App></App>,
};
