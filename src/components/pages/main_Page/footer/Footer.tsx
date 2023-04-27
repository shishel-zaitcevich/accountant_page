import './Footer.css';
import { FooterInfo } from './FooterInfo';
import { FooterTop } from './FooterTop';

export function Footer() {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterInfo />
    </footer>
  );
}
