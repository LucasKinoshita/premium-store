import Header from 'components/Header'
import ProductCard from 'components/ProductCard'
import { ProductCardProps } from 'components/ProductCard'
import { ProductsWrapper, Container } from './styles'

export type HomeTemplateProps = {
  products: ProductCardProps[]
}

const HomeTemplate = ({ products }: HomeTemplateProps) => {
  return (
    <Container>
      <Header />

      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} {...product} />
        ))}
      </ProductsWrapper>
    </Container>
  )
}

export default HomeTemplate
