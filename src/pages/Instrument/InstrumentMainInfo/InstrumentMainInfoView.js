import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import AddFormInstrument from './AddFormInstrument';

function InstrumentMainInfoView({
  showAddForm, sortData, onChangeSelect, toolbarSortSelect, visible, addInstrument, elements
}) {
  return (
    <div className="instrument-main">
      <Toolbar
        onClickAddElem={() => showAddForm()}
        sortData={sortData}
        onChangeSelect={onChangeSelect}
        toolbarSortSelect={toolbarSortSelect}
      />
      <AddFormInstrument
        visible={visible}
        onAdd={addInstrument}
      />
      {elements}
    </div>
  );
}

InstrumentMainInfoView.propTypes = {
  showAddForm: PropTypes.func.isRequired,
  sortData: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  toolbarSortSelect: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  addInstrument: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default InstrumentMainInfoView;
