import { useTranslation } from 'react-i18next';

export function TaxPayment() {
  const { t } = useTranslation();
  return (
    <section className="section section_other">
      <article className="text-part">
        <h2 className="section_title">{t('home:otherHomeTitle3')}</h2>
        <p className="section_text ">{t('home:otherHomeDesc3')}</p>
      </article>
      <img src="./assets/stickers.jpg" alt="image" className="main_part-img" />
    </section>
  );
}
