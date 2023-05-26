import { Heart as HeartIcon } from '@styled-icons/ionicons-outline'
import {
  ImageWrapper,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  Wrapper
} from './styles'
import Link from 'next/link'

export type ProductCardProps = {
  imageUrl: string
  name: string
  price: string
}

const ProductCard = ({ imageUrl, name, price }: ProductCardProps) => {
  return (
    <Wrapper>
      <Link href="product/product-name">
        <ImageWrapper>
          <img src={imageUrl} alt={name} />
        </ImageWrapper>

        <ProductInfoWrapper>
          <div>
            <ProductName>{name}</ProductName>
            <ProductPrice>R$ {price}</ProductPrice>
          </div>

          <button type="button">
            <HeartIcon />
          </button>
        </ProductInfoWrapper>
      </Link>
    </Wrapper>
  )
}

export default ProductCard
