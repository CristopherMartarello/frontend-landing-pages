import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render', () => {
    renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
