import PropTypes from 'prop-types';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

function LayoutView({ children, theme }) {
  return (
    <div className={theme}>
      <Header />
      <Banner />
      {children}
      <Footer />
    </div>
  );
}

LayoutView.propTypes = {
  children: PropTypes.element,
  theme: PropTypes.string
};

LayoutView.defaultProps = {
  children: <div />,
  theme: null
};

export default LayoutView;
