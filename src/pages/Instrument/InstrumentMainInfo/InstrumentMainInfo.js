import { Component } from 'react';

import './css/InstrumentMainInfo.css';
import InstrumentMainInfoView from './InstrumentMainInfoView';

class InstrumentMainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      visible: false,
      sortBy: null,
      toolbarSortSelect: 'name',
      tookedItem: {},
      activeId: 0,
      millHidden: true,
    };
    this.maxIndex = 10;
  }

  onChangeSelect = (event) => {
    this.setState({ toolbarSortSelect: event.target.value });
  };

  showAddForm = () => {
    this.setState(({ visible }) => ({
      visible: !visible
    }));
  };

  deleteItem = (id) => {
    this.setState((state) => {
      return { data: state.data.filter((item) => item.id !== id) };
    });
  };

  addInstrument = (value) => {
    const newItem = {
      name: value.name || 'Без назви',
      id: this.maxIndex,
      price: +value.price || 0,
      property: {
        diameter: +value.diameter || 0,
        height: +value.height || 0,
        tooth: +value.tooth || 0
      },
      active: false
    };
    this.maxIndex += 1;
    this.setState(({ data }) => {
      return { data: [...data, newItem] };
    });
  };

  dragStart = (item) => {
    setTimeout(() => {
      this.setState({ tookedItem: item, millHidden: true });
    }, 0);
    this.activeLine(null);
  };

  dragEnd = () => {
    this.setState({ millHidden: false });
    this.activeLine(null);
  };

  dragOver = (e) => {
    e.preventDefault();
  };

  drop = (item) => {
    const { tookedItem } = this.state;
    this.setState(({ data }) => {
      return {
        data: data.map((mill) => {
          if (mill.id === item.id) {
            return tookedItem;
          }
          if (mill.id === tookedItem.id) {
            return item;
          }
          return mill;
        })
      };
    });
  };

  activeLine = (itemID) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => ({
        ...item,
        active: ((item.id === itemID)) ? !item.active : false
      }));
      return { data: newArr, activeId: itemID };
    });
  };

  checkKeyIndex = (index, e, key) => {
    return (index !== -1 && e.code === key);
  };

  keyboardHandler = (e) => {
    const { activeId, data } = this.state;
    const IDs = data.map((i) => {
      return i.id;
    });
    const index = IDs.indexOf(activeId);

    if (this.checkKeyIndex(index, e, 'ArrowDown') && activeId !== IDs[IDs.length - 1]) {
      e.preventDefault();
      this.activeLine(IDs[index + 1]);
      window.scrollBy(0, 184);
    }
    if (this.checkKeyIndex(index, e, 'ArrowUp') && activeId !== IDs[0]) {
      e.preventDefault();
      this.activeLine(IDs[index - 1]);
      window.scrollBy(0, -184);
    }
    if (this.checkKeyIndex(index, e, 'Delete')) {
      this.deleteItem(activeId);
    }
  };

  sortData = () => {
    const { sortBy, toolbarSortSelect } = this.state;
    this.setState(({ data }) => {
      const oldState = [...data];
      if (sortBy === toolbarSortSelect) {
        oldState.reverse();
        return { data: oldState };
      }
      oldState.sort(this.sortMethod(toolbarSortSelect));
      return { data: oldState, sortBy: toolbarSortSelect };
    });
    this.activeLine(null);
  };

  includes(field) {
    return (field === 'diameter' || field === 'tooth' || field === 'height');
  }

  sortMethod(field) {
    if (this.includes(field)) {
      return (a, b) => (a.property[field] < b.property[field] ? -1 : 1);
    }
    return (a, b) => (a[field] < b[field] ? -1 : 1);
  }

  render() {
    const {
      data, visible, toolbarSortSelect, tookedItem, millHidden
    } = this.state;

    return (
      <InstrumentMainInfoView
        data={data}
        visible={visible}
        toolbarSortSelect={toolbarSortSelect}
        tookedItem={tookedItem}
        millHidden={millHidden}
        onChangeSelect={this.onChangeSelect}
        showAddForm={this.showAddForm}
        addInstrument={this.addInstrument}
        sortData={this.sortData}
        keyboardHandler={this.keyboardHandler}
        dragStart={this.dragStart}
        dragEnd={this.dragEnd}
        dragOver={this.dragOver}
        drop={this.drop}
        activeLine={this.activeLine}
        deleteItem={this.deleteItem}

      />
    );
  }
}

export default InstrumentMainInfo;
