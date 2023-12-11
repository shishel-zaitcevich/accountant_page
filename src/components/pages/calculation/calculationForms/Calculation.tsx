import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Footer } from '../../footer/Footer';
import { Header } from '../../header/Header';
import AccountantSystem from './AccountantSystem';
import EmployeeForm from './EployeeForm.tsx';
import LegalForm from './LegalForm';
import { CustomSlider } from './Slider';
import TaxTreatment from './TaxTreatment';
import { CustomButton } from '../../../utils/CustomButton';
import { CalculationType } from '../calculationTypes';
import { TotalPrice } from '../logic/totalPrice';
import ModalResult from '../../../utils/modalWindow/CalculationResultModal';
import { useTranslation } from 'react-i18next';
import './calculationStyles.scss';

export function Calculation() {
  const {
    control,
    getValues,
    formState: {},
  } = useForm<CalculationType>({
    mode: 'onChange',
    defaultValues: {
      quantity: 0,
      taxMode: '',
      organizationalForm: '',
      accountantSystem: false,
    },
  });

  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const onSubmit = function () {
    const values: CalculationType = getValues();
    const price = TotalPrice(values);
    setTotalPrice(price);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="calculation_form">
          <span className="calc_title">{t('calculation:calcTitle')}</span>
          <div className="choice">
            <div className="calc_slider">
              <CustomSlider name="quantity" control={control} />
            </div>

            <div className="radio_buttons">
              <TaxTreatment name="taxMode" control={control} />
              <LegalForm name="organizationalForm" control={control} />
            </div>
            <EmployeeForm name="employeeQuantity" control={control} />
            <AccountantSystem name="accountantSystem" control={control} />
          </div>

          <CustomButton
            sx={{ minWidth: '200px', maxWidth: '400px' }}
            onClick={onSubmit}
          >
            {t('calculation:calc')}
          </CustomButton>
        </div>
        <Footer />
      </div>
      <ModalResult
        open={openModal}
        onClose={handleCloseModal}
        totalPrice={totalPrice}
      />
    </>
  );
}
