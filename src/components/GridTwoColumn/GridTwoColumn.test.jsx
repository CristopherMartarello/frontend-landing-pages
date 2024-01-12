import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';

describe('<GridTwoColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumn>Children</GridTwoColumn>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
