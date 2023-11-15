export function EmployeePrice(employeeQuantity: number) {
  const additionalEmployeePrice = 100;
  const employeeQuantityPrice = additionalEmployeePrice * employeeQuantity;
  return employeeQuantityPrice;
}
