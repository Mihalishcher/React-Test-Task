import SideMenu from './components/SideMenu';
import DescriptionSide from './components/DescriptionSide';
import withLayout from '../../HOC/withLayout';

import './css/HomeMainInfo.css';

const Home = () => {
  return (
    <div className="main-info">
      <SideMenu />
      <DescriptionSide />
    </div>
  );
};

export default withLayout(Home);
