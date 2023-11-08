import { FooterInfo } from './FooterInfo';
import { FooterTop } from './FooterTop';
import './Footer.css';

export function FooterMain() {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterInfo />
    </footer>
  );
}
