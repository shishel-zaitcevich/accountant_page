export function SystemPrice(accountantSystem: boolean) {
  let accSystemPrice = 0;
  if (accountantSystem) {
    accSystemPrice = 0;
  } else {
    accSystemPrice = 1000;
  }

  return accSystemPrice;
}
