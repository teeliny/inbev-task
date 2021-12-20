import { render, screen } from '@testing-library/react';
import { ScreenProvider } from './context/screenContext';
import App from './App';

let AppWrapper = <div></div>;

beforeAll(() => {
  AppWrapper = (
    <ScreenProvider>
      <App />
    </ScreenProvider>
  )
})

test('renders learn react link', () => {
  render(<AppWrapper />);
  const linkElement = screen.getByText(/play/i);
  expect(linkElement).toBeInTheDocument();
});
