export function formatCurrencyValue(value: number): string {
  const formatedCurrency = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatedCurrency
}
