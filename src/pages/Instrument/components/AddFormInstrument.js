import { useState } from 'react';
import PropTypes from 'prop-types';

import AddFormInstrumentView from './AddFormInstrumentView';

function AddFormInstrument({ onAdd, visible }) {
  const [data, setData] = useState({
    name: '',
    price: '',
    diameter: '',
    height: '',
    tooth: ''
  });

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onAdd(data);
    setData({
      name: '',
      price: '',
      diameter: '',
      height: '',
      tooth: ''
    });
  };

  const {
    name, price, diameter, height, tooth
  } = data;

  const inputs = [
    {
      label: 'Назва інструменту: ', type: 'text', prop: 'name', value: name
    },
    {
      label: 'Діаметер інструменту: ', type: 'number', prop: 'diameter', value: diameter
    },
    {
      label: 'Довжина інструменту: ', type: 'number', prop: 'height', value: height
    },
    {
      label: 'Кількість ріжучих кромок: ', type: 'number', prop: 'tooth', value: tooth
    },
    {
      label: 'Ціна ($): ', type: 'number', prop: 'price', value: price
    },
  ];

  return (
    <AddFormInstrumentView
      onSubmit={onSubmit}
      visible={visible}
      inputs={inputs}
      onValueChange={onValueChange}
    />
  );
}

AddFormInstrument.propTypes = {
  visible: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default AddFormInstrument;
