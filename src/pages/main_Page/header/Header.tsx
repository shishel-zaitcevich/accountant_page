import './Header.css';
import { HeaderBottom } from './HeaderBottom';
import { Icons } from './Icons';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="header">
      <div className="header_container-top">
        <img src="/assets/image.svg" alt="logo" className="logo" />
        <Navigation />
        <Icons />
      </div>
      <div className="header_container-bottom">
        <HeaderBottom />
      </div>
    </header>
  );
}
