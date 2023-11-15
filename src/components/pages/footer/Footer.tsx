import { Icons } from '../main_Page/header/Icons';
import '../footer/footer.scss';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className="footer_other footer_info">
      <Link to="/">
        <img src="./assets/image.svg" alt="logo" className="logo" />
      </Link>
      <a href="mailto:abracadabra@mail.ru" className="section_text link">
        abracadabra@mail.ru
      </a>
      <p className="section_text ">2023</p>
      <Icons />
    </div>
  );
}
