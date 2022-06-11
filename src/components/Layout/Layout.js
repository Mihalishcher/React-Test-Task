import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import CallBackOrder from '../CallBackOrder/CallBackOrder';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Banner />
      {children}
      <Footer />
      <CallBackOrder />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element
};

Layout.defaultProps = {
  children: <div />
};

export default Layout;
