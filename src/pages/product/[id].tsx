import { GetStaticProps } from 'next'
import ProductTemplate, { ProductTemplateProps } from 'templates/Product'
import { useRouter } from 'next/router'

const Product = (props: ProductTemplateProps) => {
  const { isFallback } = useRouter()

  if (isFallback) return <p>Carregando...</p>

  return <ProductTemplate {...props} />
}

export const getStaticPaths = () => {
  const paths = Array.from({ length: 8 }).map((_, index) => {
    return { params: { id: String(index + 1) } }
  })

  return {
    paths: paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await fetch(
    `http://localhost:5000/products/${ctx.params?.id}`
  )
  const data: ProductTemplateProps = await response.json()

  if (!data.id) {
    return { notFound: true }
  }

  return {
    props: {
      id: data.id,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.price
    },
    revalidate: 60
  }
}

export default Product
