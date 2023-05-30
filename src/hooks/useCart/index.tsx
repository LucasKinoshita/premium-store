import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { getStorageItem, setStorageItem } from '../../utils/localStorage'
import { ProductCardProps } from '../../components/ProductCard'
import { OrderProps } from '../../components/Order'

type ItemProps = ProductCardProps & {
  quantity: number
}

export type CartContextData = {
  items: ItemProps[]
  addToCart: (data: ItemProps) => void
  order: Omit<OrderProps, 'onClick'>
  deleteItem: (id: number) => void
  updatedQuantity: (id: number, quantity: number) => void
}

export const CartContextDefaultValues = {
  items: [],
  order: { subtotal: 0, descount: 0, total: 0 },
  addToCart: () => null,
  deleteItem: () => null,
  updatedQuantity: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ItemProps[]>([])
  const [order, setOrder] = useState<Omit<OrderProps, 'onClick'>>(
    CartContextDefaultValues.order
  )

  useEffect(() => {
    const data = getStorageItem('cartItems')

    if (data) setCartItems(data)
  }, [])

  const calculateOrder = useCallback(() => {
    const cardItemsCopy = [...cartItems]

    if (cardItemsCopy.length) {
      const descount = 0

      const subtotal = cardItemsCopy.reduce((acc, item) => {
        return (acc = acc + Number(item.price) * item.quantity)
      }, 0)

      if (descount) {
        const total = subtotal - descount
        setOrder({ subtotal, descount, total })

        return
      }

      setOrder({ subtotal, descount, total: subtotal })
    }
  }, [cartItems])

  useEffect(() => {
    calculateOrder()
  }, [cartItems, calculateOrder])

  const saveData = (items: ItemProps[]) => {
    setCartItems(items)
    setStorageItem('cartItems', items)
  }

  const addToCart = (data: ItemProps) => {
    const cardItemsCopy = [...cartItems]
    const item = cardItemsCopy.find((product) => product.id === data.id)

    if (!item) {
      cardItemsCopy.push({ ...data, quantity: 1 })
      saveData(cardItemsCopy)

      return
    }

    item.quantity = item.quantity + 1
    saveData(cardItemsCopy)
  }

  const deleteItem = (id: number) => {
    const cardItemsCopy = [...cartItems]

    const items = cardItemsCopy.filter((item) => item.id !== id)
    saveData(items)
  }

  const updatedQuantity = (id: number, quantity: number) => {
    const cardItemsCopy = [...cartItems]
    const item = cardItemsCopy.find((product) => product.id === id)

    if (item) {
      item.quantity = quantity
      saveData(cardItemsCopy)
    }
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        order,
        addToCart,
        deleteItem,
        updatedQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
