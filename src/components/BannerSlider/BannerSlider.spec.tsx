import 'match-media-mock'
import { render } from '@testing-library/react'
import BannerSlider from './BannerSlider'
import bannerSliderMock from './mock'

describe('<BannerSlider />', () => {
  it('should render only 1 active', () => {
    const { container } = render(<BannerSlider items={bannerSliderMock} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
  })
})
