import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../components/Spinner/Spinner';

function CompanyMainInfoView({
  loading, elements
}) {
  return (
    <div className="company-main-info">
      <h2>Наші співробітники</h2>
      {loading ? <Spinner /> : elements}
    </div>
  );
}

CompanyMainInfoView.propTypes = {
  loading: PropTypes.bool.isRequired,
  elements: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default CompanyMainInfoView;
