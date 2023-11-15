import { CalculationType } from '../calculationTypes';
import { SystemPrice } from './accountantSystemPrice';
import { EmployeePrice } from './employeePrice';
import { organizationalLegalForm } from './organizationalLegalForm';
import { taxModes } from './taxModes';
import { TransactionsPrice } from './transactionPrice';

export function TotalPrice(values: CalculationType) {
  const price =
    TransactionsPrice(values.quantity) +
    taxModes(values.taxMode) +
    organizationalLegalForm(values.organizationalForm) +
    EmployeePrice(values.employeeQuantity) +
    SystemPrice(values.accountantSystem);

  return price;
}
