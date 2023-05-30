import { useContext } from 'react'
import { CartContext, CartContextData } from 'context/Cart'

const useCart = (): CartContextData => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCard need to CartProvider')
  }

  return context
}

export default useCart
