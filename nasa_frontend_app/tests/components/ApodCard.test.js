import React from 'react';
import { render, screen } from '@testing-library/react';
import ApodCard from '../ApodCard';

const mockApod = {
  date: '2023-06-01',
  title: 'Test Title',
  explanation: 'This is a test explanation.',
  media_type: 'image',
  url: 'https://example.com/image.jpg',
};

test('renders APOD card with title and explanation', () => {
  render(<ApodCard apod={mockApod} />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('This is a test explanation.')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', mockApod.url);
});
