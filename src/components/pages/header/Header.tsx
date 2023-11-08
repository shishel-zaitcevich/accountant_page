import { Icons } from '../main_Page/header/Icons';
import { Navigation } from '../main_Page/header/Navigation';
import '../header/header.scss';

export function Header() {
  return (
    <header className="header-other">
      <Icons />
      <div className="header_container-top">
        <img src="./assets/image.svg" alt="logo" className="logo" />
        <Navigation />
      </div>
    </header>
  );
}
