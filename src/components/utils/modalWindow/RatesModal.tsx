import React, { useEffect, useState } from 'react';
import { Modal, Backdrop, Fade, Container } from '@mui/material';
import OrderForm from '../forms/OrderForm';

export interface ModalWindowProps {
  handleOpen: () => void;
  handleClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  handleOpen,
  handleClose,
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  const handleCloseModal = () => {
    setOpen(false);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}
          >
            <OrderForm handleClose={handleCloseModal} />
          </Container>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalWindow;
