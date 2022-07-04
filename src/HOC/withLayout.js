/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect, useCallback } from 'react';
import ThemeContext from '../context/ThemeContext';

import Header from '../layout/Header/Header';
import Banner from '../layout/Banner/Banner';
import Footer from '../layout/Footer/Footer';

const withLayout = (WrappedComponent) => {
  return (props) => {
    const lastUsedTheme = localStorage.getItem('app-theme') === 'dark' ? 'dark' : null;
    const [theme, setTheme] = useState(lastUsedTheme);

    useEffect(() => {
      localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
      setTheme(theme ? null : 'dark');
    }, [theme]);

    return (
      <ThemeContext.Provider value={toggleTheme}>
        <div className={theme}>
          <Header />
          <Banner />
          <WrappedComponent {...props} />
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  };
};

export default withLayout;
