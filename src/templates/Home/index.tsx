import BannerSlider from '../../components/BannerSlider'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import { ProductCardProps } from '../../components/ProductCard'
import { ProductsWrapper, Container } from './styles'

export type HomeTemplateProps = {
  bannerItems: string[]
  products: ProductCardProps[]
}

const HomeTemplate = ({ bannerItems, products }: HomeTemplateProps) => {
  return (
    <Container>
      <Header />
      <BannerSlider items={bannerItems} />

      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} {...product} />
        ))}
      </ProductsWrapper>
    </Container>
  )
}

export default HomeTemplate
