import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import '../css/AddFormInstrumentView.css';

const AddFormInstrumentView = ({
  onSubmit, visible, inputs, onValueChange
}) => {
  const inputElements = inputs.map(({
    label, type, prop, value
  }) => {
    const { t } = useTranslation();
    return (
      <div key={label}>
        <label htmlFor={prop}>{t(`instrument.${prop}`)}</label>
        <input
          type={type}
          id={prop}
          onChange={onValueChange}
          name={prop}
          value={value}
        />
      </div>
    );
  });
  const { t } = useTranslation();
  return (
    <div className={cn('add-form-instrument', { visible })}>
      <form onSubmit={(e) => onSubmit(e)}>
        {inputElements}
        <button className="add-btn" type="submit">{t('instrument.addInstrument')}</button>
      </form>
    </div>
  );
};

AddFormInstrumentView.propTypes = {
  visible: PropTypes.bool.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export default AddFormInstrumentView;
