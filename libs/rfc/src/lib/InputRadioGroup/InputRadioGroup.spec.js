import { render } from '@testing-library/react';
import InputRadioGroup from './InputRadioGroup';
describe('InputRadioGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputRadioGroup />);
    expect(baseElement).toBeTruthy();
  });
});
