import { formatValueToCurrency } from '.'

describe('currency', () => {
  it('should return a formatted value', () => {
    expect(formatValueToCurrency(10).replace(/\xa0/g, ' ')).toEqual('R$ 10,00')
  })
})
