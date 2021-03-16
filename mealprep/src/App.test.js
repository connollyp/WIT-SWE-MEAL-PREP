import { render, screen } from '@testing-library/react';
import App from './App';

test('renders config page by default', () => {
    render( < App / > );
    const linkElement = screen.getByText(/Nutritional Constraints/i);
    expect(linkElement).toBeInTheDocument();
});