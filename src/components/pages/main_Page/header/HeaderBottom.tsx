import { useTranslation } from 'react-i18next';
import './Header.css';
export function HeaderBottom() {
  const { t } = useTranslation();
  return (
    <div className="header_container-bottom">
      <article className="article">
        <h1 className="main-title">{t('home:manage')}</h1>
        <a href="mailto:abracadabra@mail.ru" className="button_link">
          <button className="button">{t('home:textUs')}</button>
        </a>
      </article>
      <img
        src="./assets/main-screen-small.svg"
        alt="diagram"
        className="header_img"
      />
    </div>
  );
}
