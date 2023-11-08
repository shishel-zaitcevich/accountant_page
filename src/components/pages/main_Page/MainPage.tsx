import { FooterMain } from './footer/FooterMain';
import { HeaderMain } from './header/HeaderMain';
import { MainPart } from './main/MainPart';

export function Main() {
  return (
    <>
      <HeaderMain />
      <MainPart />
      <FooterMain />
    </>
  );
}
