import { HeaderBottom } from './HeaderBottom';
import { Icons } from './Icons';
import { Navigation } from './Navigation';
import './Header.css';

export function HeaderMain() {
  return (
    <header className="header">
      <Icons />
      <div className="header_container-top">
        <img src="./assets/image.svg" alt="logo" className="logo" />
        <Navigation />
      </div>
      <HeaderBottom />
    </header>
  );
}
