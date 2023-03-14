import { BannerContainer, Background } from './styles'
import banner from './assets/banner.svg'
import cart from './assets/cart.svg'
import clock from './assets/clock.svg'
import box from './assets/box.svg'
import cup from './assets/cup.svg'

export function Banner() {
  return (
    <BannerContainer>
      <div className="left-content-wrapper">
        <Background />
        <h1>Find the perfect coffee for any time of day</h1>
        <p>With Web Cafe, you get your coffee wherever you are, anytime</p>
        <div>
          <div>
            <div className="phrases-wrapper">
              <img src={cart} alt="cart icon" />
              <span>Simple and secure purchase</span>
            </div>
            <div className="phrases-wrapper">
              <img src={clock} alt="clock icon" />
              <span>Fast and tracked delivery</span>
            </div>
          </div>
          <div>
            <div className="phrases-wrapper">
              <img src={box} alt="box icon" />
              <span>Packaging keeps the coffee intact</span>
            </div>
            <div className="phrases-wrapper">
              <img src={cup} alt="cup icon" />
              <span>Coffee arrives fresh to you</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content-wrapper">
        <img src={banner} alt="cup of coffee" />
      </div>
    </BannerContainer>
  )
}
