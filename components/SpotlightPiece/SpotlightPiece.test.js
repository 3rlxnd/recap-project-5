import { render, screen, fireEvent } from '@testing-library/react';
import SpotlightPiece from './SpotlightPiece';
import LikeButton from '../LikeButton/LikeButton';

// Mock Next.js Link
jest.mock('next/link', () => ({ children }) => children);

// Mock LikeButton to track interactions
jest.mock('../LikeButton/LikeButton', () =>
  jest.fn(({ onToggle }) => (
    <button data-testid="like-button" onClick={onToggle}>
      Like
    </button>
  ))
);

describe('SpotlightPiece Component', () => {
  const mockPiece = {
    slug: 'girl-with-pearl-earring',
    imageSource: '/girl-with-pearl-earring.jpg',
    name: 'Girl with a Pearl Earring',
    artist: 'Johannes Vermeer',
  };
  const mockOnToggle = jest.fn();

  it('renders all elements correctly', () => {
    render(<SpotlightPiece liked={false} piece={mockPiece} onToggle={mockOnToggle} />);

    // Check if LikeButton is rendered
    expect(screen.getByTestId('like-button')).toBeInTheDocument();

    // Check if image is displayed
    const image = screen.getByRole('img', { name: /girl with a pearl earring/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/girl-with-pearl-earring.jpg');

    // Check if title and artist are displayed
    expect(screen.getByText('Girl with a Pearl Earring')).toBeInTheDocument();
    expect(screen.getByText('Johannes Vermeer')).toBeInTheDocument();
  });

  it('calls onToggle when LikeButton is clicked', () => {
    render(<SpotlightPiece liked={false} piece={mockPiece} onToggle={mockOnToggle} />);

    const likeButton = screen.getByTestId('like-button');
    fireEvent.click(likeButton);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });
});
