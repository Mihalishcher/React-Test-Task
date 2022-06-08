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

export default Layout