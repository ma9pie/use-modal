import type { Meta } from '@storybook/react';
import React from 'react';

const { Modal } = require('@/components');

const meta = {
  title: 'Components/Modal',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

export const Modal_ = {
  render: () => <Modal></Modal>,
};
