import { Control, FieldValues } from 'react-hook-form';

export interface CalculationType {
  quantity: number;
  taxMode: string;
  organizationalForm: string;
  employeeQuantity: number;
  accountantSystem: boolean;
}

export interface FormInputProps {
  name: string;
  control?: Control<ControlField>;
}

export type ControlField = FieldValues | any;
