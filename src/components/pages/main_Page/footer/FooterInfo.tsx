import { Icons } from '../header/Icons';

export function FooterInfo() {
  return (
    <div className="footer_info">
      <img src="./assets/image.svg" alt="logo" className="logo" />
      <a href="mailto:abracadabra@mail.ru" className="section_text text link">
        abracadabra@mail.ru
      </a>
      <p className="section_text text">2023</p>
      <Icons />
    </div>
  );
}
