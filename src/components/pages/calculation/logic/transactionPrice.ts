export function TransactionsPrice(quantity: number) {
  const operationsQuantityPrice = 2000;
  const operationQuantity = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
  const increaseAmount = 500;
  const index =
    quantity !== undefined
      ? operationQuantity.findIndex((value) => quantity <= value)
      : 0;
  const i = index !== -1 ? index : operationQuantity.length - 1;
  const totalTransactionPrice = i * increaseAmount + operationsQuantityPrice;

  return totalTransactionPrice;
}
