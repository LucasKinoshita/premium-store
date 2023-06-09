import Link from 'next/link'
import useCart from 'hooks/useCart'
import { formatValueToCurrency } from 'utils/currency'
import Button from 'components/Button'
import {
  ButtonsWrapper,
  IconButton,
  ImageWrapper,
  InfoWrapper,
  TitleWrapper,
  Wrapper
} from './styles'

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
  const { addToCart, buyNow } = useCart()

  return (
    <Wrapper>
      <Link href={`/product/${id}`}>
        <ImageWrapper>
          <img src={imageUrl} alt={name} />
        </ImageWrapper>
      </Link>

      <InfoWrapper>
        <TitleWrapper>
          <h2>{name}</h2>
          <span>{formatValueToCurrency(price)}</span>
        </TitleWrapper>
        <span>{description}</span>

        <ButtonsWrapper>
          <Button
            onClick={() => buyNow({ id, imageUrl, name, price, description })}
          >
            Buy now
          </Button>
          <IconButton
            arial-label="add to cart"
            onClick={() =>
              addToCart({ id, imageUrl, name, price, description })
            }
          >
            <img src="/assets/add-cart.svg" alt="add to cart icon" />
          </IconButton>
        </ButtonsWrapper>
      </InfoWrapper>
    </Wrapper>
  )
}

export default ProductCard
