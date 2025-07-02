import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../Home';
import * as apodAPI from '../../api/apod';

jest.mock('../../api/apod');

test('shows error message when API fails', async () => {
  apodAPI.fetchApodData.mockRejectedValue(new Error('API Error'));

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });
});
