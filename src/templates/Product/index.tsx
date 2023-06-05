import useCart from 'hooks/useCart'
import Header from 'components/Header'
import { ProductCardProps } from 'components/ProductCard'
import { ArrowBack } from '@styled-icons/ionicons-outline'
import { formatValueToCurrency } from 'utils/currency'
import {
  AddToCartButton,
  BackButton,
  ProductDescription,
  ProductDescriptionTitle,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  ProductWrapper,
  Wrapper
} from './styles'

export type ProductTemplateProps = ProductCardProps

const ProductTemplate = ({
  id,
  name,
  price,
  description,
  imageUrl
}: ProductTemplateProps) => {
  const { addToCart } = useCart()

  return (
    <Wrapper>
      <Header />
      <BackButton href="/" aria-label="back to home">
        <ArrowBack />
        <span>Voltar</span>
      </BackButton>
      <ProductWrapper>
        <img src={imageUrl} alt={name} />

        <ProductInfoWrapper>
          <ProductName>{name}</ProductName>
          <ProductPrice>{formatValueToCurrency(price)}</ProductPrice>
          <ProductDescriptionTitle>Descricao</ProductDescriptionTitle>
          <ProductDescription>{description}</ProductDescription>

          <AddToCartButton
            type="button"
            aria-label="add to cart"
            onClick={() =>
              addToCart({ id, imageUrl, name, price, description })
            }
          >
            Adicionar ao carrinho
          </AddToCartButton>
        </ProductInfoWrapper>
      </ProductWrapper>
    </Wrapper>
  )
}

export default ProductTemplate
