import { useState } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Rate } from './Rate';
import ModalWindow from '../../utils/modalWindow/Modal';

export function Rates() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Rate handleOpen={handleOpen} handleClose={handleClose} />
        <Footer />
        {modalOpen && (
          <ModalWindow handleOpen={handleOpen} handleClose={handleClose} />
        )}
      </div>
    </>
  );
}
