import Images from '../Images/Images'

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <img src={Images.logoBanner} alt="banner" />
        </div>
    )
}

export default Banner