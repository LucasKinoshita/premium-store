import { BannerSlider } from '../components/BannerSlider'
import bannerItemsMock from '../components/BannerSlider/mock'
import { Container } from '../components/Container'

export default function Home() {
  return (
    <Container>
      <BannerSlider items={bannerItemsMock} />
    </Container>
  )
}
