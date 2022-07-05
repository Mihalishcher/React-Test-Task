import '../css/DescriptionSide.css';
import { useTranslation, Trans } from 'react-i18next';

const DescriptionSide = () => {
  const { t } = useTranslation();
  return (
    <div className="description">
      <h2>{t('home.welcome')}</h2>
      <Trans>home.description</Trans>
      <br />

      <p>{t('home.prupose')}</p>
      <ul>
        <li>
          {t('home.metal')}
        </li>
        <li>
          {t('home.instrument')}
        </li>
        <li>
          {t('home.measuringTool')}
        </li>
        <li>
          {t('home.ingeneering')}
        </li>
        <li>
          {t('home.machiningService')}
        </li>
      </ul>
    </div>
  );
};

export default DescriptionSide;
