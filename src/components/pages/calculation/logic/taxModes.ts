export function taxModes(taxMode: string) {
  let taxAdditionalPrice = 0;
  const taxVariants = [
    'УСН 6% (доход) или патент',
    'УСН 15% (доход - расход), ЕСХН и другие',
    'ОСН',
  ];

  if (taxMode == taxVariants[0]) {
    taxAdditionalPrice = 1000;
  } else if (taxMode == taxVariants[1]) {
    taxAdditionalPrice = 1500;
  } else {
    taxAdditionalPrice = 2000;
  }

  return taxAdditionalPrice;
}
