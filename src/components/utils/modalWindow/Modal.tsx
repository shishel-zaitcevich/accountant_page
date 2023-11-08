import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Button, Container } from '@mui/material';
import OrderForm from '../forms/OrderForm'; // Путь к вашему файлу с формой

const ModalWindow: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Открыть форму
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
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
              height: '100vh', // 100% высоты экрана
            }}
          >
            <OrderForm handleClose={handleClose} />
          </Container>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalWindow;

// import ModalWindow from '../../utils/modalWindow/Modal';

// export function Contacts() {
//   return (
//     <>
//       <ModalWindow />
//     </>
//   );
// }
