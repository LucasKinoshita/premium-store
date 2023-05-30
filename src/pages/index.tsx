import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/Home'
import { HomeTemplateProps } from 'templates/Home'
import bannerItemsMock from 'components/BannerSlider/mock'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:5000/products')
  const data = await response.json()

  return {
    props: {
      bannerItems: bannerItemsMock,
      products: data
    }
  }
}
