import { SimpleCarousel } from '../../../utils/carousel/carousel';
import './Footer.css';

export function FooterTop() {
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
      <SimpleCarousel />
    </>
  );
}
