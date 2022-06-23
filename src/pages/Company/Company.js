import { Component } from 'react';
import CompanyServices from '../../services/CompanyServices';
import CompanyMainInfoView from './CompanyView';
import Layout from '../../layout/Layout';

const companyService = new CompanyServices();

class CompanyMainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    companyService.getAllEmployees().then((data) => {
      this.setState({ data, loading: false });
    });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <Layout>
        <CompanyMainInfoView
          loading={loading}
          data={data}
        />
      </Layout>
    );
  }
}

export default CompanyMainInfo;
