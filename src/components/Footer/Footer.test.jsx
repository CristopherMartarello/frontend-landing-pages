import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer>Children</Footer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
