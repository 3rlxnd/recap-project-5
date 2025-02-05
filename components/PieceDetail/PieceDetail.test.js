import { render, screen, fireEvent } from '@testing-library/react';
import PieceDetail from './PieceDetail';
import LikeButton from '../LikeButton/LikeButton';
import CommentSection from '../CommentSection/CommentSection';
import Colors from '../Colors/Colors';

// Mock Next.js Link
jest.mock('next/link', () => ({ children }) => children);

// Mock LikeButton to track its interactions
jest.mock('../LikeButton/LikeButton', () =>
  jest.fn(({ onToggle }) => (
    <button data-testid="like-button" onClick={onToggle}>
      Like
    </button>
  ))
);

// Mock CommentSection
jest.mock('../CommentSection/CommentSection', () =>
  jest.fn(() => <div data-testid="comment-section">Comments</div>)
);

// Mock Colors component
jest.mock('../Colors/Colors', () =>
  jest.fn(() => <div data-testid="colors-component">Colors</div>)
);

describe('PieceDetail Component', () => {
  const mockPiece = {
    slug: 'starry-night',
    imageSource: '/starry-night.jpg',
    name: 'Starry Night',
    artist: 'Vincent van Gogh',
    year: '1889',
  };
  const mockOnToggle = jest.fn();
  const mockOnComment = jest.fn();

  it('renders all elements correctly', () => {
    render(
      <PieceDetail liked={true} piece={mockPiece} onToggle={mockOnToggle} onComment={mockOnComment} />
    );

    // Check if title and artist are displayed
    expect(screen.getByText('Starry Night')).toBeInTheDocument();
    expect(screen.getByText('Vincent van Gogh')).toBeInTheDocument();

    // Check if year is displayed
    expect(screen.getByText('from 1889')).toBeInTheDocument();

    // Check if image is displayed
    const image = screen.getByRole('img', { name: /starry night/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/starry-night.jpg');

    // Check if LikeButton is rendered
    expect(screen.getByTestId('like-button')).toBeInTheDocument();

    // Check if Colors component is rendered
    expect(screen.getByTestId('colors-component')).toBeInTheDocument();

    // Check if CommentSection is rendered
    expect(screen.getByTestId('comment-section')).toBeInTheDocument();
  });

  it('calls onToggle when LikeButton is clicked', () => {
    render(
      <PieceDetail liked={true} piece={mockPiece} onToggle={mockOnToggle} onComment={mockOnComment} />
    );

    const likeButton = screen.getByTestId('like-button');
    fireEvent.click(likeButton);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('passes correct props to CommentSection', () => {
    render(
      <PieceDetail liked={true} piece={mockPiece} onToggle={mockOnToggle} onComment={mockOnComment} />
    );

    expect(CommentSection).toHaveBeenCalledWith(
      { slug: 'starry-night', pieceInfo: true, onComment: mockOnComment },
      {}
    );
  });
});
