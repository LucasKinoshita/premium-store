import ProductCard from 'components/ProductCard'
import { ProductCardProps } from 'components/ProductCard'
import { ProductsWrapper, Container } from './styles'
import Banner from 'components/Banner'

export type HomeTemplateProps = {
  products: ProductCardProps[]
}

const HomeTemplate = ({ products }: HomeTemplateProps) => {
  return (
    <>
      <Banner />
      <Container>
        <ProductsWrapper id="products">
          {products.map((product, index) => (
            <ProductCard key={`${product.name}-${index}`} {...product} />
          ))}
        </ProductsWrapper>
      </Container>
    </>
  )
}

export default HomeTemplate
