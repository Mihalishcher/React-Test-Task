import { useState, useEffect, useRef } from 'react';
import CallBackOrderView from './CallBackOrderView';

const CallBackOrder = () => {
  const [phoneNumber, setPhonenumber] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [counter, setCounter] = useState(30);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const interval = useRef(null);

  const showCallOrderForm = () => {
    setTimeout(() => {
      setVisibility(true);
    }, 5000);
  };

  useEffect(() => {
    showCallOrderForm();
    return () => { clearInterval(interval.current); };
  }, []);

  const onChange = (e) => {
    setPhonenumber(e.target.value);
  };

  const callOrdered = () => {
    interval.current = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);
    setPhonenumber('');
    setDisabledBtn(true);
  };

  const closeWindow = () => {
    setVisibility(false);
    clearInterval(interval.current);
  };

  return (
    <CallBackOrderView
      counter={counter}
      visibility={visibility}
      phoneNumber={phoneNumber}
      disabledBtn={disabledBtn}
      closeWindow={closeWindow}
      callOrdered={callOrdered}
      onChange={onChange}
    />
  );
};

export default CallBackOrder;
