import './Footer.css';

export function FooterTop() {
  if (window.innerWidth >= 769) {
    return (
      <>
        <div className="footer_top">
          <h2 className="price_titles footer_title">Тарифные планы</h2>
          <p className="text section_text">
            Мы предусмотрели для Вас самые лучшие условия комплексного
            обслуживания. Выберите тот тариф, который подходит именно Вам!
            Подробнее с тарифами можно ознакомиться на вкладке <a>тарифы</a>
          </p>
        </div>

        <div className="tarifs">
          <div className="tarif dark_tarif">
            <h3 className="price_titles">Нулевая отчетность</h3>
            <p className="section_text text ">численность 1 человек</p>
            <span className="price_size price_titles">3000</span>
            <p className="section_text text">в квартал</p>
            <a href="">
              <button className="button_bottom">Заказать</button>
            </a>
          </div>
          <div className="tarif light_tarif">
            <h3 className="price_titles light_price-title">Стартовый</h3>
            <p className="section_text text ">численность 1 человек</p>
            <span className="price_size price_titles light_price-title">
              5000
            </span>
            <p className="section_text text">в месяц</p>
            <a href="">
              <button className="button_bottom light_button">Заказать</button>
            </a>
          </div>
          <div className="tarif dark_tarif">
            <h3 className="price_titles">Стандарт</h3>
            <p className="section_text text ">численность до 5 человек</p>
            <span className="price_size price_titles">6000</span>
            <p className="section_text text">в месяц</p>
            <a href="">
              <button className="button_bottom">Заказать</button>
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="footer_top">
          <h2 className="price_titles footer_title">Тарифные планы</h2>
          <p className="text section_text section_text-mobile">
            Мы предусмотрели для Вас самые лучшие условия комплексного
            обслуживания. Выберите тот тариф, который подходит именно Вам!
            Подробнее с тарифами можно ознакомиться на вкладке <a>тарифы</a>
          </p>
        </div>
        <div className="tarifs">
          <div className="tarif light_tarif">
            <h3 className="price_titles light_price-title">Премиальный</h3>
            <p className="section_text text card_mobile ">
              численность свыше 5 человек
            </p>
            <span className="price_size price_titles light_price-title">
              7000
            </span>
            <p className="section_text text card_mobile">в месяц</p>
            <a href="">
              <button className="button_bottom light_button">Заказать</button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
