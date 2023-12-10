import { useTranslation } from 'react-i18next';
import './Advantages.css';

export function Advantages() {
  const { t } = useTranslation();
  return (
    <section className="section">
      <h2 className="section_title">{t('home:ourAdvantages')}</h2>
      <p className="section_text">{t('home:ourAdvantagesDescription')}</p>
      <div className="advantages_listing">
        <div className="advantages_list ">
          <img
            src="./assets/icons.svg"
            alt="icon"
            className="advantages_icons"
          />
          <div className="advantages_description">
            <h4 className="advantages_title text">
              {t('home:ourAdvantagesTitle1')}
            </h4>
            <p className="section_text">{t('home:ourAdvantagesDesc1')}</p>
          </div>
        </div>

        <div className="advantages_list">
          <img
            src="./assets/computer.svg"
            alt="icon"
            className="advantages_icons"
          />
          <div className="advantages_description">
            <h4 className="advantages_title text">
              {t('home:ourAdvantagesTitle2')}
            </h4>
            <p className="section_text">{t('home:ourAdvantagesDesc2')}</p>
          </div>
        </div>

        <div className="advantages_list">
          <img
            src="./assets/sale.svg"
            alt="icon"
            className="advantages_icons"
          />
          <div className="advantages_description">
            <h4 className="advantages_title">
              {t('home:ourAdvantagesTitle3')}
            </h4>
            <p className="section_text">{t('home:ourAdvantagesDesc3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
