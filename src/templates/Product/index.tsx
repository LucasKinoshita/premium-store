import Header from '../../components/Header'
import { ProductCardProps } from '../../components/ProductCard'
import { ArrowBack } from '@styled-icons/ionicons-outline'
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

export type ProductTemplateProps = ProductCardProps & {
  description: string
}

const ProductTemplate = ({
  name,
  price,
  description,
  imageUrl
}: ProductTemplateProps) => {
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
          <ProductPrice>R$ {price}</ProductPrice>
          <ProductDescriptionTitle>Descricao</ProductDescriptionTitle>
          <ProductDescription>{description}</ProductDescription>

          <AddToCartButton type="button" aria-label="add product to cart">
            Adicionar ao carrinho
          </AddToCartButton>
        </ProductInfoWrapper>
      </ProductWrapper>
    </Wrapper>
  )
}

export default ProductTemplate
