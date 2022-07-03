import Images from '../../assets/Images';

import './css/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <video src={Images.videoBanner1} type="video/mp4" muted autoPlay loop />
      <video src={Images.videoBanner2} type="video/mp4" muted autoPlay loop />
      <video src={Images.videoBanner3} type="video/mp4" muted autoPlay loop />
      <h1 className="label">AS-TEC</h1>
    </div>
  );
};

export default Banner;
