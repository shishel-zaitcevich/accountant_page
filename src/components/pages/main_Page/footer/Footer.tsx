import './Footer.css';
import { FooterInfo } from './FooterBottom';
import { FooterTop } from './FooterTop';

export function Footer() {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterInfo />
    </footer>
  );
}
