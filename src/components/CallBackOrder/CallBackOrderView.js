import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './css/CallBackOrderView.css';

function CallBackOrderView(props) {
  const {
    visibility, onChange, closeWindow, callOrdered, counter, phoneNumber, disabledBtn
  } = props;
  return (
    <div className={cn('call-back-order', { visible: visibility })}>
      <p>
        Ми Вам передзвонимо через
        {' '}
        <span>{counter}</span>
        {' '}
        секунд
      </p>
      <input
        className="input-phone"
        type="tel"
        placeholder="+380"
        onChange={onChange}
        name="phoneNumber"
        value={phoneNumber}
      />
      <div className="btn-group">
        <button onClick={callOrdered} disabled={disabledBtn} type="button" className="btn-sub">Замовити</button>
        <button onClick={closeWindow} type="button" className="btn-sub">Закрити</button>
      </div>
    </div>
  );
}

CallBackOrderView.propTypes = {
  visibility: PropTypes.bool.isRequired,
  disabledBtn: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  closeWindow: PropTypes.func.isRequired,
  callOrdered: PropTypes.func.isRequired,
};

export default CallBackOrderView;
