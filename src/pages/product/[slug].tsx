import { GetStaticPaths, GetStaticProps } from 'next'
import { productMock } from '../../components/ProductCard/mock'
import ProductTemplate, { ProductTemplateProps } from '../../templates/Product'

const Product = (props: ProductTemplateProps) => {
  return <ProductTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'product-name' } }],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: productMock.name,
      description: productMock.description,
      imageUrl: productMock.imageUrl,
      price: productMock.price
    }
  }
}

export default Product
