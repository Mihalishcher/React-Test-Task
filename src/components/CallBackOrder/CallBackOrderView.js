import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import './css/CallBackOrderView.css';

const CallBackOrderView = ({
  visibility, onChange, closeWindow, callOrdered, count, phoneNumber, disabledBtn
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn('call-back-order', { visible: visibility })}>
      <p>{t('callOrder.text', { count })}</p>
      <input
        className="input-phone"
        type="tel"
        placeholder="+380"
        onChange={onChange}
        name="phoneNumber"
        value={phoneNumber}
      />
      <div className="btn-group">
        <button
          onClick={callOrdered}
          disabled={disabledBtn}
          type="button"
          className="btn-sub"
        >
          {t('callOrder.order')}
        </button>
        <button
          onClick={closeWindow}
          type="button"
          className="btn-sub"
        >
          {t('callOrder.close')}
        </button>
      </div>
    </div>
  );
};

CallBackOrderView.propTypes = {
  visibility: PropTypes.bool.isRequired,
  disabledBtn: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  closeWindow: PropTypes.func.isRequired,
  callOrdered: PropTypes.func.isRequired,
};

export default CallBackOrderView;
