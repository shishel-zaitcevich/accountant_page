import { FooterInfo } from '../../../../FooterBottom';
import './Footer.css';
import { FooterTop } from './FooterTop';

export function Footer() {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterInfo />
    </footer>
  );
}
