export function TransactionsPrice(quantity: number) {
  const operationsQuantityPrice = 2000;
  const operationQuantity = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
  const increaseAmount = 500;
  let totalTransactionPrice = 0;

  if (quantity !== 0) {
    for (let i = 0; i < operationQuantity.length; i++) {
      if (quantity <= operationQuantity[i]) {
        totalTransactionPrice =
          (i + 1) * increaseAmount + operationsQuantityPrice;
        console.log(`Total Price: ${totalTransactionPrice}`);
        return totalTransactionPrice;
      }
    }
  } else {
    return (totalTransactionPrice = operationsQuantityPrice);
  }
  return totalTransactionPrice;
}
