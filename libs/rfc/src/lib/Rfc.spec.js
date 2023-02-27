import { render } from '@testing-library/react';
import Rfc from './Rfc';
describe('Rfc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rfc />);
    expect(baseElement).toBeTruthy();
  });
});
