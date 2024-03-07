import { render, screen } from '@testing-library/react';
import React from 'react';

import { Modal } from '../../components';

test('', async () => {
  render(<Modal></Modal>);
  await screen.findAllByText(/Modal/);
});
