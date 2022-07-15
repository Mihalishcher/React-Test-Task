/* eslint-disable react/jsx-props-no-spreading */
import Header from '../layout/Header/Header';
import Banner from '../layout/Banner/Banner';
import Footer from '../layout/Footer/Footer';

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Header />
        <Banner />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};

export default withLayout;
