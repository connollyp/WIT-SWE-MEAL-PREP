import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders log in page by default', () => {
    render( < App / > );
    const linkElement = screen.getByText(/Please Log In/i);
    expect(linkElement).toBeInTheDocument();
});