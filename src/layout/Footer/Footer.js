import './css/Footer.css';

const Footer = () => (
  <ul className="footer">
    <li>
      <a href="http://as-tec.com.ua/as-tek-index-ukr.html">Оригінал сайту компанії: AS-TEC</a>
    </li>
    <li>
      <a href="https://mihalishcher.github.io/My-resume/">
        Розробник сайту: Mikhail
        Shcherbakov
      </a>
      {' '}
      |
      <a href="https://github.com/Mihalishcher">  GitHub</a>
    </li>
    <li>©2022 Всі права захищені!</li>
  </ul>
);

export default Footer;
