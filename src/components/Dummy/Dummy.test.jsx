import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { Dummy } from '.';

describe('<Dummy />', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
