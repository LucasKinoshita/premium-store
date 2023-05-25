import HomeTemplate from '../templates/Home'
import { HomeTemplateProps } from '../templates/Home'
import bannerItemsMock from '../components/BannerSlider/mock'
import { productsMock } from '../components/ProductCard/mock'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export function getStaticProps() {
  return {
    props: {
      bannerItems: bannerItemsMock,
      products: productsMock
    }
  }
}
