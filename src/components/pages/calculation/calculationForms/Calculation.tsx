import React, { useEffect } from 'react';
import { Footer } from '../../footer/Footer';
import { Header } from '../../header/Header';
import AccountantSystem from './AccountantSystem';
import EmployeeForm from './EployeeForm.tsx';
import LegalForm from './LegalForm';
import CalculationSlider from './Slider';
import TaxTreatment from './TaxTreatment';
import { CustomButton } from '../../../utils/CustomButton';

import './calculationStyles.scss';
import { TotalPrice } from '../logic/totalPrice';
import { useForm } from 'react-hook-form';
import { CalculationType } from '../calculationTypes';

export function Calculation() {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<CalculationType>({
    mode: 'onChange',
    defaultValues: {
      quantity: 0,
      taxMode: '',
      organizationalForm: '',
      employeeQuantity: 0,
      accountantSystem: false,
    },
  });

  const values: CalculationType = getValues();

  useEffect(() => {
    // Вызываем TotalPrice при изменении значений форм
    TotalPrice(values);
  }, [values]);
  console.log(TotalPrice(values));
  return (
    <>
      <div className="container">
        <Header />
        <div className="calculation_form">
          <span className="calc_title">
            Калькулятор расчета примерной стоимости обслуживания
          </span>
          <div className="choice">
            <div className="calc_slider">
              <CalculationSlider />
            </div>

            <div className="radio_buttons">
              <TaxTreatment />
              <LegalForm name="organizationalForm" control={control} />
            </div>
            <EmployeeForm />
            <AccountantSystem />
          </div>

          <CustomButton sx={{ minWidth: '200px', maxWidth: '400px' }}>
            Рассчитать примерную стоимость
          </CustomButton>
        </div>
        <Footer />
      </div>
    </>
  );
}
