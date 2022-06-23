import SideMenu from './components/SideMenu';
import DescriptionSide from './components/DescriptionSide';
import Layout from '../../layout/Layout';

import './css/HomeMainInfo.css';

function HomeMainInfo() {
  return (
    <Layout>
      <div className="main-info">
        <SideMenu />
        <DescriptionSide />
      </div>
    </Layout>
  );
}

export default HomeMainInfo;
