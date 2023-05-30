import Slider from 'components/Slider'
import { ImageWrapper, Wrapper } from './styles'

export type BannerSliderProps = {
  items: string[]
}

const settings = {
  dots: true,
  arrows: false,
  infinite: false
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <Wrapper>
      <Slider settings={settings}>
        {items.map((image, index) => (
          <ImageWrapper key={`image-${index}`} src={image} />
        ))}
      </Slider>
    </Wrapper>
  )
}

export default BannerSlider
