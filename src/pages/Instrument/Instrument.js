import { useState } from 'react';
import Layout from '../../layout/Layout';

import './css/InstrumentMainInfo.css';
import InstrumentMainInfoView from './InstrumentView';

function InstrumentMainInfo() {
  const [visible, setVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [toolbarSortSelect, setToolbarSortSelect] = useState('name');
  const [tookedItem, setTookedItem] = useState({});
  const [activeId, setActiveId] = useState(0);
  const [millHidden, setMillHidden] = useState(true);
  const [maxIndex, setMaxIndex] = useState(10);
  const [data, setData] = useState([
    {
      name: 'AM-12', id: 0, price: 240, property: { diameter: 12, height: 120, tooth: 4 }, active: false
    },
    {
      name: 'BM-10', id: 1, price: 180, property: { diameter: 10, height: 100, tooth: 4 }, active: false
    },
    {
      name: 'CM-0810', id: 2, price: 150, property: { diameter: 8, height: 75, tooth: 4 }, active: false
    },
    {
      name: 'KM-0610', id: 3, price: 120, property: { diameter: 6, height: 60, tooth: 3 }, active: false
    },
    {
      name: 'UM-0410', id: 4, price: 100, property: { diameter: 4, height: 50, tooth: 3 }, active: false
    },
    {
      name: 'HSM-9.0', id: 5, price: 90, property: { diameter: 9, height: 110, tooth: 2 }, active: false
    },
    {
      name: 'HSS-7.0', id: 6, price: 70, property: { diameter: 7, height: 90, tooth: 2 }, active: false
    },
    {
      name: 'H-D-5.0', id: 7, price: 50, property: { diameter: 5, height: 30, tooth: 2 }, active: false
    },
    {
      name: 'BUR16.0', id: 8, price: 330, property: { diameter: 16, height: 250, tooth: 2 }, active: false
    },
    {
      name: 'KENAME3.0', id: 9, price: 220, property: { diameter: 3, height: 50, tooth: 2 }, active: false
    }
  ]);

  const onChangeSelect = (event) => {
    setToolbarSortSelect(event.target.value);
  };

  const showAddForm = () => {
    setVisible(!visible);
  };

  const deleteItem = (id) => {
    setData((prevData) => [...prevData].filter((item) => item.id !== id));
  };

  const addInstrument = (value) => {
    const newItem = {
      name: value.name || 'Без назви',
      id: maxIndex,
      price: +value.price || 0,
      property: {
        diameter: +value.diameter || 0,
        height: +value.height || 0,
        tooth: +value.tooth || 0
      },
      active: false
    };
    setMaxIndex(maxIndex + 1);
    setData((prevData) => [...prevData, newItem]);
  };

  const activeLine = (itemID) => {
    setActiveId(itemID);
    setData((prevData) => [...prevData].map((item) => ({
      ...item,
      active: (item.id === itemID ? !item.active : false)
    })));
  };

  const dragStart = (item) => {
    setTimeout(() => {
      setTookedItem(item);
      setMillHidden(true);
    }, 0);
    activeLine(null);
  };

  const dragEnd = () => {
    setMillHidden(false);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const drop = (item) => {
    const newData = data.map((mill) => {
      if (mill.id === item.id) {
        return tookedItem;
      }
      if (mill.id === tookedItem.id) {
        return item;
      }
      return mill;
    });
    setData(newData);
  };

  const checkKeyIndex = (index, e, key) => {
    return (index !== -1 && e.code === key);
  };

  const keyboardHandler = (e) => {
    const IDs = data.map((item) => {
      return item.id;
    });
    const index = IDs.indexOf(activeId);

    if (checkKeyIndex(index, e, 'ArrowDown') && activeId !== IDs[IDs.length - 1]) {
      e.preventDefault();
      activeLine(IDs[index + 1]);
      window.scrollBy(0, 184);
    }
    if (checkKeyIndex(index, e, 'ArrowUp') && activeId !== IDs[0]) {
      e.preventDefault();
      activeLine(IDs[index - 1]);
      window.scrollBy(0, -184);
    }
    if (checkKeyIndex(index, e, 'Delete')) {
      deleteItem(activeId, e);
    }
  };

  const includes = (field) => {
    return (field === 'diameter' || field === 'tooth' || field === 'height');
  };

  const sortMethod = (field) => {
    if (includes(field)) {
      return (a, b) => (a.property[field] < b.property[field] ? -1 : 1);
    }
    return (a, b) => (a[field] < b[field] ? -1 : 1);
  };

  const sortData = () => {
    activeLine(null);
    if (sortBy === toolbarSortSelect) {
      return setData((prevData) => [...prevData].reverse());
    }
    setSortBy(toolbarSortSelect);
    return setData((prevData) => ([...prevData].sort(sortMethod(toolbarSortSelect))));
  };

  return (
    <Layout>
      <InstrumentMainInfoView
        data={data}
        visible={visible}
        toolbarSortSelect={toolbarSortSelect}
        tookedItem={tookedItem}
        millHidden={millHidden}
        onChangeSelect={onChangeSelect}
        showAddForm={showAddForm}
        addInstrument={addInstrument}
        sortData={sortData}
        keyboardHandler={keyboardHandler}
        dragStart={dragStart}
        dragEnd={dragEnd}
        dragOver={dragOver}
        drop={drop}
        activeLine={activeLine}
        deleteItem={deleteItem}

      />
    </Layout>
  );
}

export default InstrumentMainInfo;
