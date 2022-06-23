import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import '../css/AddFormInstrumentView.css';

function AddFormInstrumentView({
  onSubmit, visible, inputs, onValueChange
}) {
  const inputElements = inputs.map(({
    label, type, prop, stateValue
  }) => {
    return (
      <div key={label}>
        <label htmlFor={prop}>{label}</label>
        <input
          type={type}
          id={prop}
          onChange={onValueChange}
          name={prop}
          value={stateValue}
        />
      </div>
    );
  });

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
  inputs: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string, PropTypes.number)).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export default AddFormInstrumentView;
