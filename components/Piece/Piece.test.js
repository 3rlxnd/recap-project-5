
import { render, screen, fireEvent } from '@testing-library/react';
import Piece from './Piece';
import LikeButton from '../LikeButton/LikeButton';

// Mock Next.js Link to avoid navigation issues
jest.mock('next/link', () => ({ children }) => children);

// Mock LikeButton to track its interactions
jest.mock('../LikeButton/LikeButton', () =>
  jest.fn(({ onToggle }) => (
    <button data-testid="like-button" onClick={onToggle}>
      Like
    </button>
  ))
);

describe('Piece Component', () => {
  const mockPiece = {
    slug: 'mona-lisa',
    imageSource: '/mona-lisa.jpg',
    name: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
  };
  const mockOnToggle = jest.fn();

  it('renders all elements correctly', () => {
    render(<Piece liked={false} piece={mockPiece} onToggle={mockOnToggle} />);

    // Check if LikeButton is rendered
    expect(screen.getByTestId('like-button')).toBeInTheDocument();

    // Check if image is displayed
    const image = screen.getByRole('img', { name: /mona lisa/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/mona-lisa.jpg');

    // Check if title and artist are displayed
    expect(screen.getByText('Mona Lisa')).toBeInTheDocument();
    expect(screen.getByText('Leonardo da Vinci')).toBeInTheDocument();
  });

  it('calls onToggle when LikeButton is clicked', () => {
    render(<Piece liked={false} piece={mockPiece} onToggle={mockOnToggle} />);

    const likeButton = screen.getByTestId('like-button');
    fireEvent.click(likeButton);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });
});
