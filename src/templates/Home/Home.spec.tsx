import { render, screen } from '@testing-library/react'
import HomeTemplate from '.'
import bannerItemsMock from '../../components/BannerSlider/mock'
import { productsMock } from '../../components/ProductCard/mock'

jest.mock('../../components/Header', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Header" />
  }
}))

jest.mock('../../components/BannerSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock BannerSlider" />
  }
}))

jest.mock('../../components/ProductCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductCard" />
  }
}))

describe('<HomeTemplate />', () => {
  it('should render the HomeTemplate with components', () => {
    render(
      <HomeTemplate bannerItems={bannerItemsMock} products={productsMock} />
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ProductCard')).toHaveLength(8)
  })
})
