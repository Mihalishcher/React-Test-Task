import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Toolbar from './Toolbar';
import AddFormInstrument from './AddFormInstrument';
import MillComponent from './MillComponent';

function InstrumentMainInfoView({
  showAddForm, sortData, onChangeSelect, toolbarSortSelect,
  visible, addInstrument, data, millHidden, tookedItem,
  keyboardHandler, dragStart, dragEnd, dragOver, drop, activeLine,
  deleteItem
}) {
  const elements = data.map((item) => {
    const {
      id, name, price, property, active
    } = item;

    return (
      <div
        className={cn('millComp', { active }, { millHidden: (tookedItem.id === id && millHidden) })}
        role="presentation"
        key={id}
        tabIndex={id}
        draggable
        onKeyDown={(e) => keyboardHandler(e)}
        onClick={() => activeLine(item.id)}
        onDragStart={() => dragStart(item)}
        onDragEnd={() => dragEnd()}
        onDragOver={(e) => dragOver(e)}
        onDrop={() => drop(item)}
      >
        <MillComponent
          name={name}
          price={price}
          property={property}
          onDelete={() => deleteItem(id)}
        />
      </div>
    );
  });

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
  keyboardHandler: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  dragOver: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
  activeLine: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  sortData: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  addInstrument: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  millHidden: PropTypes.bool.isRequired,
  toolbarSortSelect: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.number)]))).isRequired,
  tookedItem: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.number)])).isRequired
};

export default InstrumentMainInfoView;
