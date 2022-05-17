import Images from '../Images/Images'

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <video src={Images.videoBanner1} muted autoPlay loop></video>
            <video src={Images.videoBanner2} muted autoPlay loop></video>
            <video src={Images.videoBanner3} muted autoPlay loop></video>
            <h1 className='label'>AS-TEC</h1>
        </div>
    )
}

export default Banner