export function SystemPrice(accountantSystem: boolean) {
  let accSystemPrice;
  if (accountantSystem) {
    accSystemPrice = 1000;
  } else {
    accSystemPrice = 0;
  }
  return accSystemPrice;
}
