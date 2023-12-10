import { useTranslation } from 'react-i18next';

export function PriceQuestions() {
  const { t } = useTranslation();
  return (
    <section className="section section_other section-reverse">
      <article className="text-part text_part-reverse">
        <h2 className="section_title section_title-reverse">
          {t('home:otherHomeTitle2')}
        </h2>
        <ul className="list">
          <li className="section_text text section_text-other">
            {t('home:advantagesList1')}
          </li>
          <li className="section_text text section_text-other">
            {t('home:advantagesList2')}
          </li>
          <li className="section_text text section_text-other">
            {t('home:advantagesList3')}
          </li>
          <li className="section_text text section_text-other">
            {t('home:advantagesList4')}
          </li>
          <li className="section_text text section_text-other">
            {t('home:advantagesList5')}
          </li>
        </ul>
      </article>
      <img
        src="./assets/photo-1675453987972-48f9d721281b.png"
        alt="image"
        className="main_part-img"
      />
    </section>
  );
}
