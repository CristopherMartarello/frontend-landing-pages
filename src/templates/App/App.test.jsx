import Home from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../styles/renderTheme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
