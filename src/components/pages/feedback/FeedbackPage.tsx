import FeedbackForm from '../../utils/forms/FeedbackForm';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import '../feedback/feedback.scss';

export function FeedbackPage() {
  return (
    <>
      <div className="container">
        <Header />
        <FeedbackForm />
        <Footer />
      </div>
    </>
  );
}
