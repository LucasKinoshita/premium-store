import { productMock } from 'components/ProductCard/mock'
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
    setStorageItem('cartItems', [productMock])

    expect(
      window.localStorage.getItem('PREMIUM_STORE_cartItems')
    ).toStrictEqual(
      JSON.stringify([
        {
          id: 1,
          imageUrl:
            'https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          name: 'Name of product',
          description: 'description text',
          price: 250.5,
          quantity: 1
        }
      ])
    )
  })
})
