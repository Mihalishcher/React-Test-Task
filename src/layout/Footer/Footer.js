import { useTranslation } from 'react-i18next';
import './css/Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <ul className="footer">
      <li>
        <a href="http://as-tec.com.ua/as-tek-index-ukr.html">{t('footer.design')}</a>
      </li>
      <li>
        <a href="https://mihalishcher.github.io/My-resume/">
          {t('footer.developer')}
          Mikhail
          Shcherbakov
        </a>
        {' '}
        |
        {' '}
        <a href="https://github.com/Mihalishcher">  GitHub</a>
      </li>
      <li>{t('footer.saves')}</li>
    </ul>
  );
};

export default Footer;
