export function organizationalLegalForm(organizationalForm: string) {
  const forms = ['ИП', 'ООО'];
  let legalFormPrice = 0;
  if (organizationalForm == forms[0]) {
    legalFormPrice = 500;
  } else {
    legalFormPrice = 1000;
  }
  return legalFormPrice;
}
