import { Link } from 'react-router-dom';
import { SimpleCarousel } from '../../../utils/carousel/carousel';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export function FooterTop() {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer_top">
        <h2 className="price_titles footer_title">
          {t('home:rateFooterTitle')}
        </h2>
        <p className="text section_text">
          {t('home:rateFooterDescription')}
          <Link to="/rates" className="link">
            {` ${t('home:rates')}`}
          </Link>
        </p>
      </div>
      <SimpleCarousel />
    </>
  );
}
