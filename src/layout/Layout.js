import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';

import LayoutView from './LayoutView';

function Layout({ children }) {
  const lastUsedTheme = localStorage.getItem('app-theme') === 'dark' ? 'dark' : null;
  const [theme, setTheme] = useState(lastUsedTheme);
  const { Provider } = ThemeContext;

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme ? null : 'dark');
  };

  return (
    <Provider value={toggleTheme}>
      <LayoutView theme={theme}>{children}</LayoutView>
    </Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.element
};

Layout.defaultProps = {
  children: <div />
};

export default Layout;
