import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t('calculation:culcRes')}</DialogTitle>
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
          {t('calculation:amount')}
          {totalPrice} {t('calculation:currency')}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ModalResult;
