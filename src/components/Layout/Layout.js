import PropTypes from 'prop-types'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import CallBackOrder from '../CallBackOrder/CallBackOrder'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Banner />
            {children}
            <Footer />
            <CallBackOrder />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
}

export default Layout