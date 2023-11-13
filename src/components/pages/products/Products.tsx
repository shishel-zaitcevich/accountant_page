import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Product } from './product';

export function Products() {
  return (
    <>
      <div className="container">
        <Header />
        <Product />
        <Footer />
      </div>
    </>
  );
}
