import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600'); // primary variant
    expect(button).toHaveClass('px-4'); // medium size
  });

  it('renders with custom variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-200');
    expect(button).not.toHaveClass('bg-blue-600');
  });

  it('renders with custom size', () => {
    render(<Button size="large">Large Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('text-lg');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes through additional props', () => {
    render(
      <Button disabled data-testid="test-button">
        Disabled Button
      </Button>
    );

    const button = screen.getByTestId('test-button');
    expect(button).toBeDisabled();
  });

  it('renders different button variants correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200');
  });

  it('renders different button sizes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-3', 'text-sm');

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-4', 'text-base');

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-6', 'text-lg');
  });
});
