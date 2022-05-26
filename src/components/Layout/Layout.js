import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Banner />
            {children}
            <Footer />
        </div>

    )
}

export default Layout