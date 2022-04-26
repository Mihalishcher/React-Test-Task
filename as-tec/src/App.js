import logoAsTec from './img/logo-as-tec.png';
import emailLogo from './img/e-mail-as-tec.png';
import logoBanner from './img/ban-ukr.jpg';
import golovnaLogo1 from './img/golovna-1-as-tec.jpg';
import golovnaLogo2 from './img/golovna-2-as-tec.jpg';
import golovnaLogo3 from './img/golovna-3-as-tec.jpg';
import golovnaLogo4 from './img/golovna-4-as-tec.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ width: '100%' }}>
        <div className="head">
          <img src={logoAsTec} alt="Company logo" />
          <div className="title-site">
            <h1>Компанія AS-TEC</h1>
          </div>
          <div>
            <img src={emailLogo} alt="e-mail-logo" />
          </div>
          <div className="contact-info">
            <a href="tel:+380661234567">Tel: +38 066-123-45-67</a><br />
            <a href="email:mail@gmail.com">E-Mail : mail@gmail.com</a>
          </div>
        </div>

        <nav>
          <a href=" #">Головна</a>
          <a href="#">Компанія</a>
          <a href="#">Контакти</a>
        </nav>
        <img className="center" style={{ width: '100%' }} src={logoBanner} alt="banner" />
      </header>

      <main>
        <section className="center">
          <h2>Сайт для продажу токарних, фрезерувальних верстатів з ЧПК. А також оснасщення
            для них.</h2>
        </section>

        <section>
          <div className="main-info">
            <aside>
              <div className="aside-div">
                <a href="#"><img src={golovnaLogo1} alt="ОБЛАДНАННЯ" />
                  <p>ОБЛАДНАННЯ</p>
                </a>
              </div>
              <div className="aside-div">
                <a href="#"><img src={golovnaLogo2} alt="ІНСТРУМЕНТ І ТЕХНОЛОГІЧНЕ ОСНАЩЕННЯ" />
                  <p>ІНСТРУМЕНТ І ТЕХНОЛОГІЧНЕ ОСНАЩЕННЯ</p>
                </a>
              </div>
              <div className="aside-div">
                <a href="#"><img src={golovnaLogo3} alt="ПОСЛУГИ ОБРОБКИ" />
                  <p>ПОСЛУГИ ОБРОБКИ</p>
                </a>
              </div>
              <div className="aside-div">
                <a href="#"><img src={golovnaLogo4} alt="ІНЖИНІРИНГ" />
                  <p>ІНЖИНІРИНГ</p>
                </a>
              </div>
            </aside>
            <div className=" description">
              <h3>ЛАСКАВО ПРОСИМО!</h3>
              <p>AS-TEC - компанія в Центральній Україні, постачальник сучасних рішень і технологій у
                сфері
                обробки металу.</p>
              <p>Великий досвід роботи команди, глибоке знання ринку, співпраця зі світовими виробниками в
                області
                металообробки,
                комплексні пропозиції і післяпродажна підтримка - все це допомагає нашим партнерам стати
                більш
                конкурентними на ринку.</p>
              <p>AS-TEC пропонує своїм клієнтам:</p>
              <ul>
                <li>Металообробні обладнання, продаж, запуск, гарантійне і післягарантійне
                  обслуговування</li>
                <li>Інструмент і технологічне оснащення</li>
                <li>Вимірювальний інструмент</li>
                <li>Послуги технологічного інжинірингу</li>
                <li>Послуги виготовлення деталей за кресленнями замовника</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <ul>
          <li>
            <a href="http://as-tec.com.ua/as-tek-index-ukr.html">Оригінал сайту компанії: AS-TEC</a>
          </li>
          <li>
            <a href="https://mihalishcher.github.io/My-resume/">Розробник сайту: Mikhail
              Shcherbakov</a> |
            <a href="https://github.com/Mihalishcher">GitHub</a>
          </li>
          <li>©2022 Всі права захищені!</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
