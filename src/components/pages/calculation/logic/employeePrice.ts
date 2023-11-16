export function EmployeePrice(employeeQuantity: number) {
  const additionalEmployeePrice = 100;
  const quantity = employeeQuantity !== undefined ? employeeQuantity : 0;
  const employeeQuantityPrice = additionalEmployeePrice * quantity;

  return employeeQuantityPrice;
}
