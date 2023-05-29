import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem', () => {
  it('should return item from localStorage', () => {
    window.localStorage.setItem(
      'PREMIUM_STORE_cartItems',
      JSON.stringify(['item 1', 'item 2'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['item 1', 'item 2'])
  })
})

describe('setStorageItem', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add item to localStorage', () => {
    setStorageItem('cartItems', ['item 1', 'item 2'])

    expect(
      window.localStorage.getItem('PREMIUM_STORE_cartItems')
    ).toStrictEqual(JSON.stringify(['item 1', 'item 2']))
  })
})
