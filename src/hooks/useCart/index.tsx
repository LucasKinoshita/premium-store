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

export type CartContextData = {
  items: ProductCardProps[]
  addToCart: (data: ProductCardProps) => void
  order: Omit<OrderProps, 'onClick'>
  deleteItem: (id: number) => void
}

export const CartContextDefaultValues = {
  items: [],
  order: { subtotal: 0, descount: 0, total: 0 },
  addToCart: () => null,
  deleteItem: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([])
  const [order, setOrder] = useState<Omit<OrderProps, 'onClick'>>(
    CartContextDefaultValues.order
  )

  useEffect(() => {
    const data = getStorageItem('cartItems')

    if (data) setCartItems(data)
  }, [])

  const calculateOrder = useCallback(() => {
    if (cartItems) {
      const descount = 0

      const subtotal = cartItems.reduce((acc, item) => {
        return (acc = acc + Number(item.price))
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

  const saveData = (items: ProductCardProps[]) => {
    setCartItems(items)
    setStorageItem('cartItems', items)
  }

  const addToCart = (data: ProductCardProps) => {
    if (cartItems) {
      const items = [...cartItems, data]
      saveData(items)

      return
    }

    saveData([{ ...data }])
  }

  const deleteItem = (id: number) => {
    if (cartItems) {
      const items = cartItems.filter((item) => item.id !== id)
      saveData(items)
    }
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, order, addToCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
