import { render } from '@testing-library/react';
import InputTextWithLabel from './InputTextWithLabel';
describe('InputTextWithLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputTextWithLabel />);
    expect(baseElement).toBeTruthy();
  });
});
