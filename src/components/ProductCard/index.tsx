import Link from 'next/link'
import { Cart as CartIcon } from '@styled-icons/ionicons-outline'
import {
  ImageWrapper,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  Wrapper
} from './styles'
import { useCart } from '../../hooks/useCart'
import { formatValueToCurrency } from '../../utils/currency'

export type ProductCardProps = {
  description: string
  imageUrl: string
  name: string
  price: number
  id: number
}

const ProductCard = ({
  id,
  imageUrl,
  name,
  price,
  description
}: ProductCardProps) => {
  const { addToCart } = useCart()

  return (
    <Wrapper>
      <Link href="product/product-name">
        <ImageWrapper>
          <img src={imageUrl} alt={name} />
        </ImageWrapper>
      </Link>

      <ProductInfoWrapper>
        <Link href="product/product-name">
          <ProductName>{name}</ProductName>
          <ProductPrice>{formatValueToCurrency(price)}</ProductPrice>
        </Link>

        <button
          type="button"
          aria-label="add to cart"
          onClick={() => addToCart({ id, imageUrl, name, price, description })}
        >
          <CartIcon />
        </button>
      </ProductInfoWrapper>
    </Wrapper>
  )
}

export default ProductCard
