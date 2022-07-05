import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import '../css/Toolbar.css';

const Toolbar = ({
  onClickAddElem, sortData, onChangeSelect, toolbarSortSelect
}) => {
  const { t } = useTranslation();
  return (
    <div className="toolbar">
      <button
        onClick={onClickAddElem}
        type="button"
        className="add-btn"
      >
        {t('instrument.addInstrument')}
        &gt;&gt;
      </button>
      <select
        value={toolbarSortSelect}
        className="sort-list"
        name="sort"
        onChange={(e) => onChangeSelect(e)}
      >
        <option value="name">{t('instrument.name')}</option>
        <option value="diameter">{t('instrument.diameter')}</option>
        <option value="height">{t('instrument.height')}</option>
        <option value="tooth">{t('instrument.tooth')}</option>
        <option value="price">{t('instrument.price')}</option>
      </select>
      <button
        onClick={sortData}
        type="button"
        className="sort-btn"
      >
        ⇅
      </button>
    </div>
  );
};

Toolbar.propTypes = {
  sortData: PropTypes.func.isRequired,
  onClickAddElem: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  toolbarSortSelect: PropTypes.string.isRequired
};

export default Toolbar;
