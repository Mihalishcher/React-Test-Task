import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function AddFormInstrumentView({ onSubmit, visible, inputElements }) {
  return (
    <div className={cn('add-form-instrument', { visible })}>
      <form onSubmit={(e) => onSubmit(e)}>
        {inputElements}
        <button className="add-btn" type="submit">Додати елемент</button>
      </form>
    </div>
  );
}

AddFormInstrumentView.propTypes = {
  visible: PropTypes.bool.isRequired,
  inputElements: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddFormInstrumentView;
