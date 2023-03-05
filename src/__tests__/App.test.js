import { render, screen } from '@testing-library/react';
import App from '../App';
describe('Resty App', () => {
  it('Finds GET button', () => {
    render(<App />);
    const linkElement = screen.getByText('GET');
    expect(linkElement).toMatchSnapshot();
  });
  it('Finds POST button', () => {
    render(<App />);
    const linkElement = screen.getByText('POST');
    expect(linkElement).toMatchSnapshot();
  });
  it('Finds PUT button', () => {
    render(<App />);
    const linkElement = screen.getByText('PUT');
    expect(linkElement).toMatchSnapshot();
  });
  it('Finds DELETE button', () => {
    render(<App />);
    const linkElement = screen.getByText('DELETE');
    expect(linkElement).toMatchSnapshot();
  });
})

