import { useTranslation } from 'react-i18next';

export function Timing() {
  const { t } = useTranslation();
  return (
    <section className="section section_other">
      <article className="text-part">
        <h2 className="section_title">{t('home:otherHomeTitle1')}</h2>
        <p className="section_text">{t('home:otherHomeDesc1')}</p>
      </article>
      <img
        src="./assets/photo-1652466380685-c552233a941a.png"
        alt="image"
        className="main_part-img"
      />
    </section>
  );
}
