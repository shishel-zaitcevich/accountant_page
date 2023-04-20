import { Advantages } from './Advantages';
import { PriceQuestions } from './PriceQuestions';
import { TaxPayment } from './TaxPayment';
import { Timing } from './Timing';

export function MainPart() {
  return (
    <main className="main">
      <Advantages />
      <Timing />
      <PriceQuestions />
      <TaxPayment />
    </main>
  );
}
