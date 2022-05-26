import { Component } from 'react'

import Images from '../Resources/Images'

import './Banner.css'



class Banner extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('asdasd')
        return false
    }

    render() {
        return (
            <div className="banner">
                <video src={Images.videoBanner1} type="video/mp4" muted autoPlay loop></video>
                <video src={Images.videoBanner2} type="video/mp4" muted autoPlay loop></video>
                <video src={Images.videoBanner3} type="video/mp4" muted autoPlay loop></video>
                <h1 className='label'>AS-TEC</h1>
            </div>
        )
    }



}

export default Banner