import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from '@mui/material';

interface ModalResultProps {
  open: boolean;
  onClose: () => void;
  totalPrice: number;
}

const ModalResult: React.FC<ModalResultProps> = ({
  open,
  onClose,
  totalPrice,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Результат расчета</DialogTitle>
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{ position: 'absolute', right: 20, top: 4 }}
      >
        ✕
      </IconButton>
      <DialogContent>
        <Typography>
          Приблизительная сумма вашего обслуживания в месяц составит{' '}
          {totalPrice} рублей.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ModalResult;
